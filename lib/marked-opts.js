var marked = require('marked'),
    hljs = require('highlight.js');

var renderer = new marked.Renderer();

//TODO
//renderer.image = require('marked-renderer-video');
renderer.heading = require('marked-renderer-heading-anchors');

//renderer._link = renderer.link;
//renderer.link = function(href, title, text) {
//    return this._link(href.replace(/(.*\/)([^\/#]*)(.*)/, '$1$3'), title, text);
//};

module.exports = {
    renderer: renderer,

    headingClassName: 'article__heading article__heading_',
    headingAnchorClassName: 'article__heading-anchor',

    highlight: function (code, lang) {
        // TODO: implement true highligting for 'files' codeblock: different colors for directories, files, comments
        if (lang === 'files') {
            return code.replace(/\`/g, ''); // temporary implementation of 'files' highlighting
        } else if (lang === 'text') {
            return code;
        } else if (lang) {
            return hljs.highlight(lang, code).value;
        }
        return hljs.highlightAuto(code).value;
    }
};
