module.exports = function() {
    block('article')(
        replace()(function() {
            this.hljs = this.ctx.hljs;
            this.slugger = this.ctx.slugger;

            this.slugger.reset();

            return this.ctx.content;
        }),

        elem('heading')(
            def()(function() {
                const content = this.ctx.content;
                const text = (Array.isArray(content) ? content.join('') : content.toString())
                    .replace(/<a.*?>.*?<\/a>/g, '');

                this.ctx.anchor = this.slugger.slug(text.replace(/&.*?;|<.*?>|«|»/g, ''));

                return applyNext();
            }),
            tag()(function() {
                return 'h' + this.elemMods.level;
            }),
            attrs()(function() {
                return {
                    id: this.ctx.anchor
                };
            }),
            content()(function() {
                return [
                    {
                        elem: 'heading-anchor',
                        attrs: {
                            href: '#' + this.ctx.anchor
                        }
                    },
                    this.ctx.content
                ];
            })
        ),

        elem('heading-anchor').tag()('a'),

        elem('paragraph').tag()('p'),

        elem('blockquote').tag()('blockquote'),

        elem('thematic-break').tag()('hr'),

        elem('list')(
            tag()('ul'),
            elemMod('ordered', true).tag()('ol')
        ),

        elem('list-item').tag()('li'),

        elem('table')(
            tag()('table'),
            content()(function() {
                const rows = this.ctx.rows || [];
                const hasHeading = rows.length > 1;

                return rows.map(function(row, idx) {
                    return {
                        elem: 'table-row',
                        elemMods: hasHeading && idx === 0 ? { heading: true } : null,
                        content: row.map(function(cell) {
                            return {
                                elem: 'table-cell',
                                elemMods: hasHeading && idx === 0 ? { heading: true } : null,
                                content: cell
                            };
                        })
                    };
                });
            })
        ),

        elem('table-row').tag()('tr'),

        elem('table-cell')(
            tag()('td'),
            elemMod('heading', true).tag()('th')
        ),

        elem('code')(
            def()(function() {
                const result = applyNext();
                const newLines = result.match(/\n/g);

                // должно быть чётное количество строк в коде,
                // чтобы было правильное выравнивание по сетке
                if (newLines && newLines.length % 2 === 1) {
                    this.elemMods.correctHeight = true;
                }

                return applyNext();
            }),
            tag()('pre'),
            content()(function() {
                const code = applyNext();
                let lang = this.ctx.lang;

                // TODO: implement true highligting for 'files' codeblock: different colors for directories, files, comments
                if (lang === 'files') {
                    return code.replace(/`/g, ''); // temporary implementation of 'files' highlighting
                } else if (lang === 'text') {
                    return code;
                } else if (lang) {
                    if (lang === 'bemjson' || lang === 'tsx') {
                        lang = 'js';
                    } else if (lang === 'shell') {
                        lang = 'sh';
                    }

                    return this.hljs.highlight(lang, code).value;
                }

                return this.hljs.highlightAuto(code).value;
            })
        ),

        // inline
        elem('inline-code')(
            tag()('code'),
            content()(function() {
                return this.xmlEscape(applyNext());
            })
        ),

        elem('strong').tag()('strong'),
        elem('emphasis').tag()('em'),

        elem('image')(
            tag()('img'),
            attrs()(function() {
                return {
                    src: this.ctx.src,
                    alt: this.ctx.alt
                };
            })
        ),

        elem('link')(
            tag()('a'),
            attrs()(function() {
                const href = this.ctx.href;
                const attrs = { href };
                // External links open in a new tab; same-origin/anchor stay in place.
                if (typeof href === 'string' && /^https?:\/\/(?![^/]*bem\.info)/.test(href)) {
                    attrs.target = '_blank';
                    attrs.rel = 'noopener noreferrer';
                }
                return attrs;
            })
        )
    );
};
