module.exports = [
    {
        exp: '^/libs/bem-mvc/(.*)',
        now: 'https://github.com/bem/bem-mvc'
    },
    {
        exp: '^/libs/bem-(.*)/(.*)',
        now: '/libraries/classic/bem-$1/',
    },
    {
        exp: '^/technologies/classic/libs/bem-(.*)/(.*)',
        now: '/libraries/classic/bem-$1/$2',
    },
];
