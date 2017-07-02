module.exports = `
server {
    listen 8080;

    server_name {LANG}.bem.info;

    root /var/www/bem.info/{LANG};

    location ~* \.svgd$ {
        add_header 'Content-Type' 'image/svg+xml';
        add_header 'Content-Encoding' 'deflate';
    }

    location / {
        try_files $uri $uri/ @redirects;
    }
    location @redirects {
        {REDIRECTS}
    }
}`;
