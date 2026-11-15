import fs from 'node:fs';
import path from 'node:path';

function escapeHtml(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
        .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function redirectHtml(target, staging = false) {
    const safe = escapeHtml(target);
    return `<!doctype html>
<html><head><meta charset="utf-8">
<title>Redirecting</title>
${staging ? '<meta name="robots" content="noindex">' : ''}
<link rel="canonical" href="${safe}">
<script>
(function () {
    var target = new URL(${JSON.stringify(target)});
    target.search = location.search;
    target.hash = location.hash;
    location.replace(target.href);
})();
</script>
<meta http-equiv="refresh" content="0; url=${safe}">
</head><body><p><a href="${safe}">Continue</a></p></body></html>
`;
}

export function rootRedirectHtml(config) {
    const ru = config.origins.ru + '/';
    const en = config.origins.en + '/';
    return `<!doctype html>
<html><head><meta charset="utf-8"><title>BEM</title>
${config.environment === 'staging' ? '<meta name="robots" content="noindex">' : ''}
<script>
(function () {
    var lang = (navigator.language || 'en').toLowerCase();
    var target = new URL(/^(ru|uk)(-|$)/.test(lang) ? ${JSON.stringify(ru)} : ${JSON.stringify(en)});
    target.search = location.search;
    target.hash = location.hash;
    location.replace(target.href);
})();
</script>
<noscript><meta http-equiv="refresh" content="0; url=${escapeHtml(en)}"></noscript>
</head><body><a href="${escapeHtml(ru)}">Русский</a> | <a href="${escapeHtml(en)}">English</a></body></html>
`;
}

export function fallbackRedirectHtml(config) {
    return `<!doctype html>
<html><head><meta charset="utf-8"><title>Page not found</title>
<meta name="robots" content="noindex">
<script>
(function () {
    var match = location.pathname.match(/^\\/(ru|en)(?:\\/(.*))?$/);
    if (!match) return;
    var origins = ${JSON.stringify(config.origins)};
    // Concatenate onto a fixed origin: a path beginning // is never a host.
    var target = new URL(origins[match[1]] + '/' + (match[2] || ''));
    target.search = location.search;
    target.hash = location.hash;
    location.replace(target.href);
})();
</script>
</head><body><h1>Page not found</h1>
<a href="${escapeHtml(config.origins.ru)}/">Русский</a> | <a href="${escapeHtml(config.origins.en)}/">English</a>
</body></html>
`;
}

export function generateDomainRedirects({ languageDirs, outputDir, config }) {
    fs.mkdirSync(outputDir, { recursive: true });
    let count = 0;
    for (const [lang, languageDir] of Object.entries(languageDirs)) {
        function visit(dir) {
            for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
                const source = path.join(dir, entry.name);
                if (entry.isDirectory()) visit(source);
                else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== '404.html') {
                    const relative = path.relative(languageDir, source);
                    const pathname = '/' + relative.split(path.sep).join('/').replace(/index\.html$/, '');
                    const destination = path.join(outputDir, lang, relative);
                    fs.mkdirSync(path.dirname(destination), { recursive: true });
                    fs.writeFileSync(destination, redirectHtml(config.origins[lang] + pathname, config.environment === 'staging'));
                    count++;
                }
            }
        }
        visit(languageDir);
        // GitHub may normalize /ru to /ru/; both reach this generated page.
    }
    fs.writeFileSync(path.join(outputDir, 'index.html'), rootRedirectHtml(config));
    fs.writeFileSync(path.join(outputDir, '404.html'), fallbackRedirectHtml(config));
    fs.writeFileSync(path.join(outputDir, 'robots.txt'), config.environment === 'staging'
        ? 'User-agent: *\nDisallow: /\n'
        : 'User-agent: *\nDisallow:\n' + Object.values(config.origins).map(origin => 'Sitemap: ' + origin + '/sitemap.xml\n').join(''));
    return count;
}
