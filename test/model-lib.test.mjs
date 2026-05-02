import assert from 'node:assert/strict';
import Module from 'node:module';
import path from 'node:path';
import { test } from 'node:test';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requireFromRoot = createRequire(path.join(ROOT, 'package.json'));

function requireWithoutBemLibSiteView(modulePath) {
    const originalLoad = Module._load;

    Module._load = function(request, parent, isMain) {
        if (request.includes('bem-lib-site-view')) {
            throw new Error(`Blocked deprecated dependency: ${request}`);
        }

        return originalLoad.call(this, request, parent, isMain);
    };

    try {
        delete requireFromRoot.cache[requireFromRoot.resolve(modulePath)];
        return requireFromRoot(modulePath);
    } finally {
        Module._load = originalLoad;
    }
}

test('content model builds library pages without bem-lib-site-view', () => {
    const model = requireWithoutBemLibSiteView('./content/model.cjs');
    const blockPage = model.find(page =>
        page.url === '/libraries/classic/bem-core/4.2.1/desktop/i-bem/');

    assert.ok(blockPage, 'expected bem-core block page in generated model');
    assert.equal(blockPage.type, 'lib');
    assert.equal(blockPage.library, 'bem-core');
    assert.equal(blockPage.version, '4.2.1');
    assert.equal(blockPage.block.blockName, 'i-bem');
    assert.ok(blockPage.block.content.en, 'expected English block docs');
    assert.ok(blockPage.setsList.some(set => set.name === 'desktop'));
});
