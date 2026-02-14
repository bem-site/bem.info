import { defineConfig } from 'vite';

export default defineConfig({
    root: 'output',
    server: {
        port: 8008,
        open: false
    },
    preview: {
        port: 8008
    },
    plugins: [
        {
            name: 'svgd-content-type',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url && /\.svgd/.test(req.url)) {
                        res.setHeader('Content-Type', 'image/svg+xml');
                        res.setHeader('Content-Encoding', 'deflate');
                    }
                    next();
                });
            },
            configurePreviewServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url && /\.svgd/.test(req.url)) {
                        res.setHeader('Content-Type', 'image/svg+xml');
                        res.setHeader('Content-Encoding', 'deflate');
                    }
                    next();
                });
            }
        }
    ]
});
