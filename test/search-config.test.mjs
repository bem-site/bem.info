import assert from 'node:assert/strict';
import test from 'node:test';

import { searchIndexUrl, searchLanguage } from '../lib/search-config.mjs';
import { buildTokenizer } from '../scripts/build-search-index.mjs';

test('поиск использует русский для украинского и английский для неизвестного языка', () => {
    assert.deepEqual(
        ['ru', 'en', 'uk', 'de'].map(searchLanguage),
        ['russian', 'english', 'russian', 'english']
    );
});

test('URL поискового индекса сохраняет базовый путь деплоя', () => {
    assert.equal(searchIndexUrl('/ru/', 'ru'), '/ru/_search/index.json');
    assert.equal(searchIndexUrl('/bem.info/ru/', 'ru'), '/bem.info/ru/_search/index.json');
});

test('поисковый индекс использует русский tokenizer для украинского контента', () => {
    assert.equal(buildTokenizer({ lang: 'uk' }).language, 'russian');
});
