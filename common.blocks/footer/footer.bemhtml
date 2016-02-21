block('footer')(
    tag()('div'), // TODO: may be <footer> ?

    elem('community').tag()('ul'),
    elem('channel')(
        tag()('li'),
        content()(function() {
            return {
                elem: 'channel-link',
                attrs: { href: this.ctx.url },
                content: this.ctx.content
            }
        })
    ),
    elem('channel-link').tag()('a'),

    elem('domain').tag()('p'),
    elem('copyright').tag()('p'),

    elem('copyright-logo')(
        tag()('img'),
        attrs()(function() {
            var attrs = applyNext() || {};
            // TODO: how to process this with borschik ?
            // TODO: i18n
            attrs.src = '/footer__copyright-logo_lang_en.svgz';
            attrs.alt = this.ctx.content;
            return attrs;
        }),
        wrap()(function() {
            return {
                elem: 'copyright-logo-link',
                attrs: { href: this.ctx.url },
                content: this.ctx
            }
        })
    ),
    elem('copyright-logo-link').tag()('a'),

	content()(function() {
		return [
            {
				block: 'legos',
                mods: { color: 'inverted' }
			},
			applyNext(),
            {
                elem: 'layout',
                content: [
                    {
                        elem: 'community',
                        content: [
                            {
                                elem: 'channel',
                                url: 'https://ru.bem.info/forum/',
                                content: 'Форум'
                            },
                            {
                                elem: 'channel',
                                url: 'https://www.facebook.com/groups/bem.info/',
                                content: 'Facebook'
                            },
                            {
                                elem: 'channel',
                                url: 'https://twitter.com/bem_ru/',
                                content: 'Twitter'
                            }
                        ]
                    },
                    {
                        elem: 'domain',
                        content: 'Jadwiga and Jacek Duniec thank you for domain!'
                    },
                    {
                        elem: 'copyright',
                        content: [
                            '<strong>BEM</strong> is proudly made by ',
                            {
                                elem: 'copyright-logo',
                                url: 'https://yandex.com/company/',
                                content: 'Yandex'
                            }
                        ]
                    }
                ]
            }
	 	]
	})
);
