module.exports = `

upstream bemforum_{LANG}_server {
    server https://127.0.0.1:8079 fail_timeout=0;
}

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
    location /forum/ {
        proxy_pass http://bemforum_{LANG}_server;
    }
    location @redirects {
        {REDIRECTS}
    }
}`;
