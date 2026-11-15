import assert from 'node:assert/strict';
import test from 'node:test';

import { searchIndexUrl, searchLanguage, searchResultUrl } from '../lib/search-config.mjs';
import { buildTokenizer } from '../scripts/build-search-index.mjs';

test('поиск использует русский для украинского и английский для неизвестного языка', () => {
    assert.deepEqual(
        ['ru', 'en', 'uk', 'de'].map(searchLanguage),
        ['russian', 'english', 'russian', 'english']
    );
});

test('URL поискового индекса сохраняет базовый путь деплоя', () => {
    assert.equal(searchIndexUrl('/'), '/_search/index.json');
    assert.equal(searchIndexUrl('/generated-bem-info-ru/'), '/generated-bem-info-ru/_search/index.json');
    assert.equal(searchIndexUrl('../../'), '../../_search/index.json');
    assert.equal(searchResultUrl('/methodology/', 'https://ru-test.bem.info/'), 'https://ru-test.bem.info/methodology/');
    assert.equal(searchResultUrl('/methodology/', 'https://bem-site.github.io/generated-bem-info-ru/'), 'https://bem-site.github.io/generated-bem-info-ru/methodology/');
});

test('поисковый индекс использует русский tokenizer для украинского контента', () => {
    assert.equal(buildTokenizer({ lang: 'uk' }).language, 'russian');
});
