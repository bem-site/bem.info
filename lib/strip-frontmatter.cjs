'use strict';

// Срезает YAML-frontmatter Docusaurus-документов. Пайплайн bem.info рендерит
// frontmatter мусором, а h1 берёт из тела — поэтому, если тело не начинается
// с заголовка, он синтезируется из frontmatter-поля title.
module.exports = function stripFrontmatter(md) {
    const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!m) return md;

    const body = md.slice(m[0].length).replace(/^(?:[ \t]*\r?\n)+/, '');
    if (/^#\s/.test(body)) return body;

    const title = m[1].match(/^title:\s*(.+)$/m);
    if (!title) return body;

    return `# ${title[1].trim().replace(/^(['"])(.*)\1$/, '$2')}\n\n${body}`;
};
