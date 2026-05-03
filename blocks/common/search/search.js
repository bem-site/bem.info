import bemDom from 'bem:i-bem-dom';
import Input from 'bem:input';
import KeyCodes from 'bem:keyboard__codes';

const MIN_QUERY = 2;
const DEBOUNCE_MS = 100;
const RESULT_LIMIT = 8;

const SEARCH_SCHEMA = {
    url: 'string',
    title: 'string',
    subtitle: 'string',
    body: 'string'
};

let dbPromise = null;

function pageLang() {
    // Prefer <html lang>; fall back to the /<lang>/ URL prefix so the search
    // never grabs the wrong index if the lang attribute is missing.
    let code = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
    if (!code) {
        const m = location.pathname.match(/^\/(ru|en)\b/);
        code = m ? m[1] : 'en';
    }
    return code === 'ru' ? 'ru' : 'en';
}

function indexUrl(lang) {
    const base = document.documentElement.dataset.langRoot || `/${lang}`;
    return `${base}/_search/index.json`;
}

async function loadDb() {
    const lang = pageLang();
    const [orama, stemmerMod, stopwordsMod, res] = await Promise.all([
        import('@orama/orama'),
        lang === 'ru'
            ? import('@orama/stemmers/russian')
            : import('@orama/stemmers/english'),
        lang === 'ru'
            ? import('@orama/stopwords/russian')
            : import('@orama/stopwords/english'),
        fetch(indexUrl(lang))
    ]);
    if (!res.ok) throw new Error(`search index ${res.status}`);
    const raw = await res.json();

    // Tokenizer config has to match the indexer's exactly so query and
    // index tokens stay symmetric.
    const db = orama.create({
        schema: SEARCH_SCHEMA,
        sort: { enabled: false },
        components: {
            tokenizer: {
                language: lang === 'ru' ? 'russian' : 'english',
                stemmer: stemmerMod.stemmer,
                stopWords: stopwordsMod.stopwords,
                tokenizeSkipProperties: ['url']
            }
        }
    });
    await orama.load(db, raw);
    return db;
}

function getDb() {
    if (!dbPromise) {
        dbPromise = loadDb().catch(err => {
            dbPromise = null;
            throw err;
        });
    }
    return dbPromise;
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const HL_PREFIX_LEN = 4;
const EXCERPT_CTX = 80;

// Build a regex that matches each query token (or its 4-letter prefix for
// short tokens we lose to stemming) plus the rest of the word. Two regexes:
// `find` — single match for excerpt anchoring; `all` — global, for highlight.
function buildHighlighter(term) {
    const tokens = [...new Set(
        String(term || '').toLowerCase().split(/\s+/).filter(t => t.length >= 2)
    )];
    if (!tokens.length) return null;

    const prefixes = [...new Set(tokens.map(t =>
        t.length <= HL_PREFIX_LEN ? t : t.slice(0, HL_PREFIX_LEN)
    ))].sort((a, b) => b.length - a.length);

    const pattern = prefixes.map(escapeRegex).join('|');
    return {
        find: new RegExp(`(?:${pattern})\\p{L}*`, 'iu'),
        all: new RegExp(`(?:${pattern})\\p{L}*`, 'giu')
    };
}

function highlight(text, hl) {
    if (!text) return '';
    if (!hl) return escapeHtml(text);

    hl.all.lastIndex = 0;
    let out = '';
    let last = 0;
    let m;
    while ((m = hl.all.exec(text)) !== null) {
        if (m.index > last) out += escapeHtml(text.slice(last, m.index));
        out += '<mark class="search__mark">' + escapeHtml(m[0]) + '</mark>';
        last = m.index + m[0].length;
        if (m[0].length === 0) hl.all.lastIndex++;
    }
    if (last < text.length) out += escapeHtml(text.slice(last));
    return out;
}

function makeExcerpt(text, hl) {
    if (!text || !hl) return null;
    hl.find.lastIndex = 0;
    const m = hl.find.exec(text);
    if (!m) return null;
    const start = Math.max(0, m.index - EXCERPT_CTX);
    const end = Math.min(text.length, m.index + m[0].length + EXCERPT_CTX);
    let snippet = text.slice(start, end);
    if (start > 0) snippet = '…' + snippet;
    if (end < text.length) snippet = snippet + '…';
    return snippet;
}

function renderItem(hit, hl) {
    const doc = hit.document;
    const titleHtml = highlight(doc.title || '', hl);
    const subtitleHtml = doc.subtitle
        ? `<span class="search__hit-subtitle">${highlight(doc.subtitle, hl)}</span>`
        : '';

    let excerptHtml = '';
    if (hl && doc.body) {
        const inTitle = hl.find.test(doc.title || '');
        hl.find.lastIndex = 0;
        const inSubtitle = doc.subtitle ? hl.find.test(doc.subtitle) : false;
        hl.find.lastIndex = 0;
        if (!inTitle && !inSubtitle) {
            const snippet = makeExcerpt(doc.body, hl);
            if (snippet) {
                excerptHtml = `<span class="search__hit-excerpt">${highlight(snippet, hl)}</span>`;
            }
        }
    }

    return `<a class="search__hit" role="option" href="${escapeHtml(doc.url)}">
        <span class="search__hit-title">${titleHtml}</span>
        ${subtitleHtml}
        ${excerptHtml}
    </a>`;
}

export default bemDom.declBlock('search', {
    onSetMod: {
        js: {
            inited: function() {
                this._input = this.findChildBlock(Input);
                this._submit = this.findChildElem('submit');
                this._results = this.findChildElem('results');
                this._resultsDom = this._results.domElem[0];
                this._inputDom = this._input.domElem.find('.input__control')[0];
                this._activeIndex = -1;
                this._lastTerm = '';

                // Listen to native DOM events on the underlying <input>: the
                // bem 'change' event from desktop.input depends on a tick
                // loop that may miss programmatic / fast input. Native
                // 'input' fires on every keystroke and on paste.
                this._domEvents(this._input).on('input', this._onInputChange, this);
                this._domEvents(this._input).on('keydown', this._onInputKey, this);
                this._domEvents(this._submit).on('click', this._onSubmitClick, this);
                this._domEvents(this._results).on('mousedown', '.search__hit', this._onHitMouseDown, this);
            }
        },
        loading: {
            'true': function() { this._renderState('loading'); },
            'error': function() { this._renderState('error'); },
            '': function() { /* clear handled per-render */ }
        },
        opened: {
            'true': function() {
                // Whoever opens the panel (header__toggle, our submit click,
                // …) leaves focus to us. Defer past the click so the
                // bubbling pointerup doesn't immediately blur the input.
                if (!this._inputDom) return;
                setTimeout(() => this._inputDom.focus(), 0);
            }
        }
    },

    _onInputChange: function() {
        // Read the value directly from the DOM — bem input's `_val` is only
        // updated by the desktop tick loop, which can lag a frame or two.
        const term = (this._inputDom ? this._inputDom.value : this._input.getVal()).trim();
        if (term === this._lastTerm) return;
        this._lastTerm = term;

        clearTimeout(this._debounce);
        if (term.length < MIN_QUERY) {
            this._renderHits([]);
            return;
        }
        this._debounce = setTimeout(() => this._search(term).catch(err => {
            console.error('search:', err);
            this.setMod('loading', 'error');
        }), DEBOUNCE_MS);
    },

    _search: async function(term) {
        this.setMod('loading', true);
        const [{ search }, db] = await Promise.all([
            import('@orama/orama'),
            getDb()
        ]);
        // Term may have changed while we were loading
        const current = (this._inputDom ? this._inputDom.value : this._input.getVal()).trim();
        if (current !== term) return;

        const result = await search(db, {
            term,
            properties: ['title', 'subtitle', 'body'],
            boost: { title: 4, subtitle: 2, body: 1 },
            limit: RESULT_LIMIT,
            tolerance: 1
        });

        this.delMod('loading');
        this._renderHits(result.hits || [], buildHighlighter(term));
    },

    _renderState: function(state) {
        const lang = pageLang();
        const messages = {
            loading: { ru: 'Поиск…', en: 'Searching…' },
            error: { ru: 'Не удалось загрузить индекс', en: 'Failed to load search index' }
        };
        const msg = messages[state]?.[lang] || '';
        this._resultsDom.innerHTML = msg ? `<div class="search__hint">${escapeHtml(msg)}</div>` : '';
        this._showResults(Boolean(msg));
    },

    _renderHits: function(hits, hl) {
        this._activeIndex = -1;
        if (!hits.length) {
            const term = (this._inputDom ? this._inputDom.value : this._input.getVal()).trim();
            if (term.length >= MIN_QUERY) {
                const lang = pageLang();
                const msg = lang === 'ru' ? 'Ничего не найдено' : 'No results';
                this._resultsDom.innerHTML = `<div class="search__hint">${escapeHtml(msg)}</div>`;
                this._showResults(true);
            } else {
                this._showResults(false);
            }
            return;
        }
        this._resultsDom.innerHTML = hits.map(h => renderItem(h, hl)).join('');
        this._showResults(true);
    },

    _showResults: function(show) {
        if (show) {
            this._resultsDom.removeAttribute('hidden');
            this.setMod('has-results', true);
        } else {
            this._resultsDom.setAttribute('hidden', '');
            this.delMod('has-results');
            this._resultsDom.innerHTML = '';
        }
    },

    _onInputKey: function(e) {
        const items = this._resultsDom.querySelectorAll('.search__hit');
        if (!items.length) return;

        if (e.keyCode === KeyCodes.DOWN) {
            e.preventDefault();
            this._activeIndex = (this._activeIndex + 1) % items.length;
            this._highlight(items);
        } else if (e.keyCode === KeyCodes.UP) {
            e.preventDefault();
            this._activeIndex = (this._activeIndex - 1 + items.length) % items.length;
            this._highlight(items);
        } else if (e.keyCode === KeyCodes.ENTER && this._activeIndex >= 0) {
            e.preventDefault();
            window.location.href = items[this._activeIndex].getAttribute('href');
        }
    },

    _highlight: function(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.toggle('search__hit_active', i === this._activeIndex);
        }
    },

    _onHitMouseDown: function() {
        // Default click → href works fine; mousedown handler kept as a hook
        // for future analytics or to prevent input-blur cancelling navigation.
    },

    _onSubmitClick: function() {
        // Make the magnifying-glass icon a real toggle: open the panel and
        // focus the input on first click; collapse on second click.
        if (this.hasMod('opened')) {
            this.delMod('opened');
        } else {
            this.setMod('opened');
            if (this._inputDom) this._inputDom.focus();
        }
    }
});
