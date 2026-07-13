import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { create, load, search } from '@orama/orama';

import {
    buildSearchIndex,
    buildTokenizer,
    SEARCH_SCHEMA
} from '../scripts/build-search-index.mjs';

test('украинский индекс ищется с русским stemming после сохранения и загрузки', async t => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'bem-info-search-'));
    const cacheDir = path.join(fixture, 'cache');
    const outputDir = path.join(fixture, 'output');
    t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));

    fs.mkdirSync(cacheDir, { recursive: true });
    fs.writeFileSync(
        path.join(cacheDir, 'article.html'),
        '<article>Работа с элементом интерфейса.</article>'
    );
    fs.writeFileSync(path.join(cacheDir, 'data.json'), JSON.stringify([{
        url: '/methodology/elements/',
        title: { uk: 'Елементи інтерфейсу' },
        contentFile: '/article.html'
    }]));

    await buildSearchIndex({ lang: 'uk', cacheDir, outputDir });

    const db = create({
        schema: SEARCH_SCHEMA,
        sort: { enabled: false },
        components: { tokenizer: buildTokenizer({ lang: 'uk' }) }
    });
    const saved = JSON.parse(fs.readFileSync(
        path.join(outputDir, '_search', 'index.json'),
        'utf8'
    ));
    await load(db, saved);

    const result = await search(db, {
        term: 'элементами',
        properties: ['body']
    });
    assert.equal(result.count, 1);
    assert.equal(result.hits[0].document.url, '/uk/methodology/elements/');
});
