'use strict';

var marked = require('marked'),
    hljs = require('highlight.js'),
    GithubSlugger = require('github-slugger');

var renderer = new marked.Renderer(),
    slugger = new GithubSlugger();

renderer.heading = function(text, level) {
    var anchor = slugger.slug(text);

    return '<h' + level + ' class="article__heading article__heading_' + level + '"' + ' id="' + anchor + '">' +
        '<a href="#' + anchor + '" class="article__heading-anchor"></a>' + text + '</h' + level + '>';
};

module.exports = {
    slugger: slugger,
    renderer: renderer,

    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,

    highlight: function (code, lang) {
        // TODO: implement true highligting for 'files' codeblock: different colors for directories, files, comments
        if (lang === 'files') {
            return code.replace(/\`/g, ''); // temporary implementation of 'files' highlighting
        } else if (lang === 'text') {
            return code;
        } else if (lang) {
            if (lang === 'bemjson') {
                lang = 'js';
            } else if (lang === 'shell') {
                lang = 'sh';
            }

            return hljs.highlight(lang, code).value;
        }
        return hljs.highlightAuto(code).value;
    }
};

