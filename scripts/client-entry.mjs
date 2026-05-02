/**
 * Entry point for client-side JS bundle.
 *
 * Imports bem-core desktop platform and project blocks.
 * Built with Vite + vite-plugin-bem-levels.
 *
 * Based on node_modules/bem-core/build/platforms/desktop.js
 * with only the modules needed by the project.
 */

// Core utilities (no dependencies)
import 'bem:identify';
import 'bem:inherit';
import 'bem:objects';
import 'bem:functions';
import 'bem:functions__debounce';
import 'bem:next-tick';

// Events system
import 'bem:events';

// i-bem core
import 'bem:i-bem__internal';
import 'bem:i-bem';

// DOM utilities
import 'bem:jquery__config';
import 'bem:jquery';
import 'bem:dom';

// i-bem-dom and its subsystems
import 'bem:i-bem-dom__events';
import 'bem:i-bem-dom__events_type_dom';
import 'bem:i-bem-dom__events_type_bem';
import 'bem:i-bem-dom__collection';
import 'bem:i-bem-dom';
import 'bem:i-bem-dom__init';
import 'bem:i-bem-dom__init_auto';

// Browser APIs
import 'bem:keyboard__codes';

// Project blocks
import 'bem:input';
import 'bem:search';
import 'bem:form';
import 'bem:header';
import 'bem:yandex-metrica-api';

// "Copy code" buttons on .article__code blocks. See #226.
(function() {
    const labels = {
        ru: { copy: 'Скопировать', done: 'Скопировано' },
        en: { copy: 'Copy', done: 'Copied' }
    };
    const lang = (document.documentElement.lang || 'ru').slice(0, 2);
    const t = labels[lang] || labels.en;

    function init() {
        document.querySelectorAll('.article__code').forEach(function(pre) {
            if (pre.querySelector('.article__code-copy')) return;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'article__code-copy';
            btn.textContent = t.copy;
            btn.addEventListener('click', async function() {
                const clone = pre.cloneNode(true);
                clone.querySelectorAll('.article__code-copy').forEach(function(b) { b.remove(); });
                try {
                    await navigator.clipboard.writeText(clone.innerText);
                    btn.textContent = t.done;
                    btn.classList.add('article__code-copy_done');
                    setTimeout(function() {
                        btn.textContent = t.copy;
                        btn.classList.remove('article__code-copy_done');
                    }, 1500);
                } catch (e) {
                    btn.textContent = '×';
                }
            });
            pre.appendChild(btn);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
