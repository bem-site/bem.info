module.exports = [
    {
        exp: '^/toolbox/sdk/bem-naming/(.*)',
        now: '/toolbox/sdk/bem-naming-entity/$1',
    },
    {
        exp: '^/toolbox/enb/enb-(.*)/(.*)',
        now: '/toolbox/enb/packages/enb-$1/$2',
    },
];
