module.exports = [{
    block: 'promo-header',
    content: [
        {
            elem: 'header',
            content: [
                {
                    block: 'bem',
                    mix: { block: 'promo-header', elem: 'title' }
                },
                ' ',
                {
                    elem: 'subtitle',
                    content: 'платформа'
                }
            ]
        },
        {
            block: 'promo-action',
            attrs: { href: 'tutorials/quick-start-static/' },
            content: 'Быстрый старт'
        },
        {
            elem: 'text',
            content: [
                'Платформа ',
                { block: 'bem' },
                ' это экосистема web-разработки, предоставляющая технологии и библиотеки готовых компонентов. ',
                'Позволяет быстро создавать, масштабировать и легко поддерживать проекты любой сложности.'
            ]
        }
    ]
}, {
    block: 'promo-section',
    mods: { color: 'white' },
    content: [
        {
            block: 'promo-title',
            content: 'Технологии'
        },
        {
            block: 'promo-text',
            content: 'валпорав плорапв апро'
        },
        {
            block: 'promo-text',
            content: 'валпорав плорапв апро'
        },
        {
            block: 'promo-text',
            content: 'валпорав плорапв апро'
        },
        {
            block: 'promo-text',
            content: 'валпорав плорапв апро'
        },
    ]
}, {
    block: 'promo-section',
    mods: { color: 'black' },
    content: [
        {
            block: 'promo-title',
            content: 'Библиотеки'
        },
        {
            block: 'promo-features',
            content: [
                {
                    elem: 'image',
                    url: 'promo-features__squirrel.svg'
                },
                {
                    elem: 'separator'
                },
                {
                    elem: 'image',
                    url: 'promo-features__yogi.svg'
                },
                {
                    block: 'promo-text',
                    content: 'Простое и быстрое обновление базовых компонентов.'
                }
            ]
        },
        {
            block: 'articles',
            content: [
                    {
                        title: 'БЭМантика: пишите осмысленные стили без повторов',
                        author: 'Мэтт Стоу',
                        photo: 'people/matt-stow.jpg',
                        position: 'UX & a11y разработчик в @TOTVS Labs',
                        url: 'http://css-live.ru/articles/bemantika-pishite-osmyslennye-stili-bez-povtorov.html',
                        date: '21-05-2015',
                        text: 'Мэтт Стоу объясняет, почему, использование БЭМ (или похожей методологии) не обязательно означает, что ваш код не будет семантичным и доступным.'
                    },
                    {
                        title: 'Учимся любить БЭМ',
                        author: 'Johan Ronsse',
                        photo: 'people/johan-ronsse.jpg',
                        url: 'http://frontender.info/learning-to-love-bem/',
                        date: '27-05-2015',
                        text: 'Должен признаться: когда я впервые услышал о БЭМ, я подумал, что идея как-то не очень. Зачем так усложнять именование в CSS? Со временем я узнал БЭМ получше и убедился, что у него есть свои достоинства: в основном он полезен для больших приложений с огромным количеством компонентов.'
                    }
                ].map(function(article) {
                    return [
                        {
                            elem: 'title',
                            content: [
                                {
                                    elem: 'link',
                                    attrs: { href: article.url },
                                    content: [
                                        {
                                            elem: 'photo',
                                            src: article.photo,
                                            alt: article.author
                                        },
                                        ' ',
                                        article.title
                                    ]
                                },
                                ' ',
                                {
                                    elem: 'date',
                                    content: article.date
                                }
                            ]
                        },
                        {
                            elem: 'author',
                            content: article.author
                        },
                        article.position && {
                            elem: 'position',
                            content: article.position
                        },
                        {
                            elem: 'text',
                            content: article.text
                        }
                    ];
                })
        }
    ]
}]
