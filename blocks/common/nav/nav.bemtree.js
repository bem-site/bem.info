block('nav').content()(function() {
    var data = this.data,
        site = data.page.site,
        lang = data.lang,
        result;

    result = data.pages.filter(function(page) {
            if (!new RegExp('^' + site).test(page.url) || page.nav === false) { return false; }

            const levelPage = page.url.split('/').length;
            const levelSite = site.split('/').length;

            if ((page.site === site || page.url === page.site) &&
                    levelPage >= levelSite + 1) {
                page.level = levelPage - levelSite;

                return true;
            }

            return false;
        }).map(function(item) {
            var isCurrent = this.data.page.url === item.url,
                title = typeof item.title === 'string' ? item.title : item.title[lang],
                contents = item.contents || [],
                slugger = new (require('github-slugger'))();

            return {
                elem: 'item',
                elemMods: { current: isCurrent },
                content: [
                    {
                        elem: 'title',
                        attrs: {
                            style: `margin-left:${item.level * 16}px`
                        },
                        content: isCurrent ? title : {
                            elem: 'link',
                            attrs: { href: data.root + item.url },
                            content: title
                        }
                    },
                    contents.length > 0 && {
                        elem: 'content',
                        elemMods: { visible: isCurrent },
                        attrs: {
                            style: `margin-left:${item.level * 16}px`
                        },
                        content: contents.map(unit => ({
                            elem: 'link',
                            mix: { block: 'nav', elem: 'chapter' },
                            attrs: { href: data.root + item.url + '#' + slugger.slug(unit.content) },
                            content: unit.content
                        }))
                    }
                ]
            };
        }, this);

    this.ctx.items && result.push({
        elem: 'item',
        content: this.ctx.items
    });

    return result;
});
