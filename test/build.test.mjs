import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { promisify } from 'node:util';

import { buildHTML } from '../scripts/build.mjs';

const execFileAsync = promisify(execFile);

function childProcessThat(emits, value) {
    return () => {
        const child = new EventEmitter();
        queueMicrotask(() => child.emit(emits, value));
        return child;
    };
}

const options = {
    bundles: ['index'],
    languages: ['en']
};

test('buildHTML отклоняется с исходной ошибкой дочернего процесса', async () => {
    const cause = new Error('failed to start HTML generator');

    await assert.rejects(
        buildHTML({ ...options, forkProcess: childProcessThat('error', cause) }),
        error => error === cause
    );
});

test('buildHTML отклоняется при ненулевом коде генератора HTML', async () => {
    await assert.rejects(
        buildHTML({ ...options, forkProcess: childProcessThat('close', 7) }),
        /Process exited with 7/
    );
});

test('генератор HTML завершается с ошибкой при отказе Gorshochek', async t => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'bem-info-template-'));
    t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));

    const moduleDir = path.join(fixture, 'node_modules', 'gorshochek');
    fs.mkdirSync(moduleDir, { recursive: true });
    const template = path.join(fixture, 'template.cjs');
    fs.copyFileSync(path.resolve(import.meta.dirname, '../lib/template.cjs'), template);
    fs.writeFileSync(path.join(moduleDir, 'index.js'), `
module.exports = {
    createModel: () => ({}),
    tasks: {
        core: { importModel: () => value => value },
        template: { applyBEM: () => () => Promise.reject(new Error('generator failed')) }
    }
};
`);

    await assert.rejects(
        execFileAsync(process.execPath, [template], {
            cwd: path.resolve(import.meta.dirname, '..'),
            env: {
                ...process.env,
                NODE_PATH: path.join(fixture, 'node_modules'),
                source: fixture,
                langs: 'en',
                lang: 'en'
            }
        }),
        error => error.code === 1 && error.stderr.includes('generator failed')
    );
});
