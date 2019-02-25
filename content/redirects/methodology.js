module.exports = [
    {
        url: '/methodology/js-principles/',
        now: '/methodology/js/',
    },
    {
        url: '/method/definitions/',
        now: '/methodology/key-concepts/'
    },
    {
        url: '/method/naming/',
        now: '/methodology/naming-convention/'
    },
    {
        url: [
            '/method/filesystem/',
            '/methodology/filesystem/',
        ],
        now: '/methodology/filestructure/'
    },
    {
        url: '/method/build-method/',
        now: '/methodology/build/'
    },
    {
        url: '/method/declaration/',
        now: '/methodology/declarations/'
    },
    {
        exp: '^/faq/(.*)',
        now: '/methodology/faq/$1'
    },
    {
        exp: '^/method/(.*)',
        now: '/methodology/$1'
    }
];
