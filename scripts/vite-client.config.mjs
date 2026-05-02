/**
 * Vite config for the client-side JS bundle.
 *
 * Builds an ES module entry (`client.js`) plus content-hashed chunks under
 * `chunks/` for dynamic imports. The entire output dir is later copied as
 * `output/bem.info/<lang>/_client/`, so the entry is loaded with
 * `<script type="module" src="…/_client/client.js">` and the browser pulls
 * chunks lazily from `…/_client/chunks/<name>-<hash>.js`.
 *
 * vite-plugin-bem-levels resolves `bem:` imports across bem-core and project
 * blocks; everything else (npm packages, dynamic imports) goes through the
 * normal Vite/Rollup pipeline.
 */

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import bemLevels from '../node_modules/bem-core/build/plugins/vite-plugin-bem-levels.js';

const rootDir = resolve(import.meta.dirname, '..');
const isProd = process.env.YENV === 'production';

export default defineConfig({
    root: rootDir,

    plugins: [
        bemLevels({
            platform: 'desktop',
            levels: {
                desktop: [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/desktop.blocks',
                    'blocks/common'
                ]
            },
            rootDir
        })
    ],

    build: {
        outDir: resolve(rootDir, '.build-client'),
        emptyOutDir: true,
        sourcemap: false,
        minify: isProd,
        target: 'es2020',
        modulePreload: false,
        rollupOptions: {
            input: resolve(import.meta.dirname, 'client-entry.mjs'),
            output: {
                format: 'es',
                entryFileNames: 'client.js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    }
});
