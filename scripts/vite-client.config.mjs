/**
 * Vite config for building client-side JS bundle.
 *
 * Uses vite-plugin-bem-levels to resolve bem: imports across
 * bem-core blocks and project blocks.
 */

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import bemLevels from '../node_modules/bem-core/build/plugins/vite-plugin-bem-levels.js';

const rootDir = resolve(import.meta.dirname, '..');

export default defineConfig({
    root: rootDir,

    plugins: [
        bemLevels({
            platform: 'desktop',
            levels: {
                desktop: [
                    'node_modules/bem-core/common.blocks',
                    'node_modules/bem-core/desktop.blocks',
                    'blocks/common',
                ],
            },
            rootDir,
        }),
    ],

    build: {
        lib: {
            entry: resolve(import.meta.dirname, 'client-entry.mjs'),
            name: 'bemInfo',
            formats: ['iife'],
            fileName: () => 'client.js',
        },
        outDir: resolve(rootDir, '.build-client'),
        emptyOutDir: true,
        sourcemap: false,
        minify: false,
        rollupOptions: {
            output: {
                // IIFE — no externals, everything bundled including jQuery
            },
        },
    },
});
