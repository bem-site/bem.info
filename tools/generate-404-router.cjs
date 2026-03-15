'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Generates a 404.html with a JavaScript router for regex-based redirects.
 * GitHub Pages serves 404.html for any path that doesn't match a file.
 * The base path is auto-detected at runtime from the URL.
 *
 * @param {Array} regexRedirects - Array of regex redirect objects (with exp/now fields)
 * @param {String} outputDir - Output directory (e.g. output/bem.info/en)
 */
module.exports = function generate404Router(regexRedirects, outputDir) {
    const rules = regexRedirects.map(redirect => {
        const patterns = Array.isArray(redirect.exp) ? redirect.exp : [redirect.exp];
        return patterns.map(pattern => {
            return { pattern: pattern, target: redirect.now };
        });
    }).reduce((a, b) => a.concat(b), []);

    const rulesJson = JSON.stringify(rules, null, 2);

    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Page not found</title>
<script>
(function() {
    var rules = ${rulesJson};
    var pathname = window.location.pathname;

    // Auto-detect base path by trying pattern matches from each slash position
    var slashes = [0];
    for (var s = 0; s < pathname.length; s++) {
        if (pathname[s] === '/') slashes.push(s);
    }

    for (var si = 0; si < slashes.length; si++) {
        var base = pathname.slice(0, slashes[si]);
        var matchPath = pathname.slice(slashes[si]);

        for (var i = 0; i < rules.length; i++) {
            var match = matchPath.match(new RegExp(rules[i].pattern));
            if (match) {
                var target = rules[i].target;
                for (var j = 1; j < match.length; j++) {
                    target = target.replace('$' + j, match[j] || '');
                }
                if (target.startsWith('/')) {
                    target = base + target;
                }
                window.location.replace(target);
                return;
            }
        }
    }
})();
</script>
</head>
<body>
<h1>Page not found</h1>
<p>The page you are looking for does not exist.</p>
<p><a href="./">Go to homepage</a></p>
</body>
</html>`;

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, '404.html'), html);
};
