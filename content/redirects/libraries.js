module.exports = [
    {
        exp: '/libs/bem-(.*)/(.*)',
        now: '/libraries/classic/bem-$1/',
    },
    {
        exp: '/technologies/classic/libs/bem-(.*)/(.*)',
        now: '/libraries/classic/bem-$1/$2',
    },
];
