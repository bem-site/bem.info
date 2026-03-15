'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Generates static HTML redirect files for GitHub Pages / static hosting.
 * Each redirect creates an index.html with a <meta http-equiv="refresh"> tag.
 * Targets are computed as relative paths from source to target.
 *
 * Regex-based redirects (exp) are collected into a JS router in 404.html.
 *
 * @param {Array} redirects - Array of redirect objects from prepare-model
 * @param {String} outputDir - Output directory for the language (e.g. output/bem.info/en)
 * @returns {{ regexRedirects: Array }} - Regex redirects that couldn't be expressed as static files
 */
module.exports = function generateStaticRedirects(redirects, outputDir) {
    const regexRedirects = [];

    redirects.forEach(redirect => {
        // Regex redirects can't be expressed as static files
        if (redirect.exp) {
            regexRedirects.push(redirect);
            return;
        }

        const urls = Array.isArray(redirect.url) ? redirect.url : [redirect.url];
        const rawTarget = redirect.now;

        urls.forEach(url => {
            // Normalize: ensure trailing slash, build file path
            const normalizedUrl = url.endsWith('/') ? url : url + '/';
            const filePath = path.join(outputDir, normalizedUrl, 'index.html');

            // Compute relative target
            var target = rawTarget;
            if (typeof rawTarget === 'string' && rawTarget.startsWith('/')) {
                const sourceDir = path.posix.dirname(normalizedUrl + 'index.html');
                target = path.posix.relative(sourceDir, rawTarget);
                // Ensure directories end with /
                if (rawTarget.endsWith('/')) target += '/';
                // Handle same-directory case
                if (!target || target === '/') target = './';
            }

            const html = [
                '<!DOCTYPE html>',
                '<html>',
                '<head>',
                '<meta charset="utf-8">',
                '<meta http-equiv="refresh" content="0; url=' + escapeHtml(target) + '">',
                '<link rel="canonical" href="' + escapeHtml(target) + '">',
                '</head>',
                '<body>',
                '<p>Redirecting to <a href="' + escapeHtml(target) + '">' + escapeHtml(target) + '</a></p>',
                '</body>',
                '</html>'
            ].join('\n');

            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, html);
        });
    });

    return { regexRedirects };
};

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
