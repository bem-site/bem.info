block('social-likes')(
    content()(function() {
        return [
            this.i18n(this.block, 'text'),//Share with world
            ': ',
            {
                elem: 'service',
                elemMods: { type: 'facebook' },
                params: this.ctx.params,
                lang: this.ctx.lang,
                url: 'https://www.facebook.com/sharer.php?s=100',
                content: 'Facebook'
            },
            ' ',
            {
                elem: 'service',
                elemMods: { type: 'vk' },
                params: this.ctx.params,
                lang: this.ctx.lang,
                url: 'http://vk.com/share.php?',
                content: 'VKontakte'
            },
            ' ',
            {
                elem: 'service',
                elemMods: { type: 'twitter' },
                params: this.ctx.params,
                lang: this.ctx.lang,
                url: 'https://twitter.com/share?',
                content: 'Twitter'
            }
        ]
    }),
    elem('service')(
        tag()('a'),
        attrs()(function() {
            var url = this.ctx.url,
                lang = this.ctx.lang,
                baseUrl = 'https://' + lang + '.bem.info',
                params = this.ctx.params;

            url += '&url=' + encodeURIComponent(baseUrl + params.ogUrl || '');
            url += '&title=' + encodeURIComponent(params.ogDescription || '');
            url += '&image=' + encodeURIComponent(params.ogImage || ''); // ogImage пока тоже нет

            return {
                href: url
            }
        })
    )
);
