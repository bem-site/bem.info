module.export = [
    {
        exp: [
            '/wp-(.*)',
            '/xmlrpc.php(.*)',
            '/(.*)/wp-includes/(.*)'
        ],
        now: '',
        code: 418 // https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP#418
    }
];
