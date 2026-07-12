import assert from 'node:assert/strict';
import { test } from 'node:test';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stripFrontmatter = createRequire(path.join(ROOT, 'package.json'))('./lib/strip-frontmatter.cjs');

test('markdown без frontmatter возвращается как есть', () => {
    const md = '# Title\n\ntext';
    assert.equal(stripFrontmatter(md), md);
});

test('frontmatter срезается, h1 синтезируется из title', () => {
    const result = stripFrontmatter('---\nid: installation\ntitle: Quick Start\n---\n\nFor start usage…');
    assert.ok(result.startsWith('# Quick Start\n'));
    assert.ok(!result.includes('---'));
    assert.ok(result.includes('For start usage…'));
});

test('h1 не дублируется, если тело уже начинается с заголовка', () => {
    const result = stripFrontmatter('---\nid: cn\ntitle: cn\nhide_title: true\n---\n\n# `cn`\n\ntext');
    assert.ok(result.startsWith('# `cn`'));
    assert.equal(result.match(/^# /gm).length, 1);
});

test('кавычки вокруг title убираются', () => {
    const result = stripFrontmatter("---\ntitle: 'Lazy modifiers'\n---\nbody");
    assert.ok(result.startsWith('# Lazy modifiers\n'));
});

test('frontmatter без title просто срезается', () => {
    const result = stripFrontmatter('---\nid: x\n---\nbody');
    assert.equal(result, 'body');
});

test('CRLF-frontmatter обрабатывается', () => {
    const result = stripFrontmatter('---\r\nid: x\r\ntitle: Title\r\n---\r\nbody');
    assert.ok(result.startsWith('# Title\n'));
});
