import assert from 'node:assert/strict';
import { test } from 'node:test';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const validateContent = createRequire(path.join(ROOT, 'package.json'))('./lib/validate-content.cjs');

test('страница с source и contentFile проходит', () => {
    assert.deepEqual(validateContent([
        { url: '/a/', published: true, source: 'https://x/y.md', contentFile: '/a/index.md' }
    ]), []);
});

test('страница с source без contentFile попадает в отчёт', () => {
    assert.deepEqual(validateContent([
        { url: '/a/', published: true, source: 'https://x/y.md' }
    ]), ['/a/']);
});

test('страницы без source и неопубликованные игнорируются', () => {
    assert.deepEqual(validateContent([
        { url: '/section/', published: true },
        { url: '/draft/', published: false, source: 'https://x/y.md' }
    ]), []);
});
