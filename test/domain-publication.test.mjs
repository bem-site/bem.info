import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import siteConfig from '../lib/site-config.cjs';
import { rewriteSiteUrls } from '../scripts/site-urls.mjs';
import {
    generateDomainRedirects, redirectHtml, rootRedirectHtml, fallbackRedirectHtml
} from '../scripts/generate-domain-redirects.mjs';

const config = siteConfig('staging');

function navigate(html, address, language = 'en') {
    const current = new URL(address);
    let target;
    const location = {
        pathname: current.pathname, search: current.search, hash: current.hash,
        replace: value => { target = value; }
    };
    const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
    vm.runInNewContext(script, { URL, location, navigator: { language } });
    return target;
}

test('deployment configuration separates staging and production', () => {
    assert.equal(config.apex, 'https://test.bem.info');
    assert.equal(config.origins.ru, 'https://ru-test.bem.info');
    assert.equal(siteConfig('production').origins.en, 'https://en.bem.info');
    assert.throws(() => siteConfig('unknown'), /Unknown deployment/);
});

test('HTML rewriting preserves cross-language domains and portable local assets', () => {
    const html = '<a href="https://en.bem.info/methodology/?q=1#x">EN</a>' +
        '<a href="//ru.beta.bem.info/tools/">RU</a>' +
        '<a href="https://bem.info/en/methodology/">EN</a>' +
        '<a href="/methodology/">local</a><img src="/logo.svg">' +
        '<link rel="canonical" href="https://ru.bem.info/methodology/">' +
        '<a href="https://example.org/ru/">external</a>';
    const result = rewriteSiteUrls(html, { lang: 'ru', relativeRoot: '../..', config });
    assert.ok(result.includes('href="https://en-test.bem.info/methodology/?q=1#x"'));
    assert.ok(result.includes('href="https://ru-test.bem.info/tools/"'));
    assert.ok(result.includes('href="https://en-test.bem.info/methodology/"'));
    assert.ok(result.includes('href="../../methodology/"'));
    assert.ok(result.includes('src="../../logo.svg"'));
    assert.ok(result.includes('rel="canonical" href="https://ru-test.bem.info/methodology/"'));
    assert.ok(result.includes('href="https://example.org/ru/"'));
});

test('language switch points to another host with the same page path', () => {
    let render;
    vm.runInNewContext(fs.readFileSync(new URL('../blocks/common/lang-switcher/lang-switcher.bemtree.js', import.meta.url), 'utf8'), {
        block: () => ({ content: () => fn => { render = fn; } })
    });
    const items = render.call({ data: {
        lang: 'ru', langs: ['en', 'ru'], siteConfig: config,
        page: { url: '/methodology/quick-start/' }
    } });
    assert.equal(items.find(item => item.attrs).attrs.href,
        'https://en-test.bem.info/methodology/quick-start/');
});

test('known-page redirects retain query and fragment without a 404 router', () => {
    const html = redirectHtml('https://ru-test.bem.info/methodology/quick-start/');
    assert.equal(navigate(html, 'https://test.bem.info/ru/methodology/quick-start/?q=%D0%B1#naming'),
        'https://ru-test.bem.info/methodology/quick-start/?q=%D0%B1#naming');
    assert.ok(html.includes('http-equiv="refresh"'));
    assert.ok(html.includes('rel="canonical"'));
});

test('fallback redirects unknown language paths and never redirects another prefix or host', () => {
    const html = fallbackRedirectHtml(config);
    assert.equal(navigate(html, 'https://test.bem.info/en/unknown/?q=1#x'),
        'https://en-test.bem.info/unknown/?q=1#x');
    assert.equal(navigate(html, 'https://test.bem.info/ru'), 'https://ru-test.bem.info/');
    assert.equal(navigate(html, 'https://test.bem.info/rubbish/'), undefined);
    assert.equal(new URL(navigate(html, 'https://test.bem.info/ru//example.org/')).hostname,
        'ru-test.bem.info');
});

test('apex root chooses the direct language domain and retains URL state', () => {
    const html = rootRedirectHtml(config);
    assert.equal(navigate(html, 'https://test.bem.info/?q=1#x', 'ru-RU'),
        'https://ru-test.bem.info/?q=1#x');
    assert.equal(navigate(html, 'https://test.bem.info/', 'en-US'),
        'https://en-test.bem.info/');
});

test('generator mirrors every known HTML path under its language prefix', t => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'bem-domain-redirects-'));
    t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));
    const ru = path.join(fixture, 'ru');
    fs.mkdirSync(path.join(ru, 'methodology', 'quick-start'), { recursive: true });
    fs.writeFileSync(path.join(ru, 'index.html'), 'home');
    fs.writeFileSync(path.join(ru, '404.html'), 'not found');
    fs.writeFileSync(path.join(ru, 'methodology', 'quick-start', 'index.html'), 'page');
    const outputDir = path.join(fixture, 'redirects');
    assert.equal(generateDomainRedirects({ languageDirs: { ru }, outputDir, config }), 2);
    const html = fs.readFileSync(path.join(outputDir, 'ru/methodology/quick-start/index.html'), 'utf8');
    assert.equal(navigate(html, 'https://test.bem.info/ru/methodology/quick-start/'),
        'https://ru-test.bem.info/methodology/quick-start/');
    assert.ok(!fs.existsSync(path.join(outputDir, 'ru/404.html')));
});

test('hreflang omits a missing translation while canonical stays on the current domain', () => {
    let render;
    vm.runInNewContext(fs.readFileSync(new URL('../blocks/common/root/root.bemtree.js', import.meta.url), 'utf8'), {
        block: () => ({ replace: () => fn => { render = fn; } })
    });
    const url = '/methodology/quick-start/';
    const result = render.call({ ctx: { data: {
        lang: 'ru', langs: ['en', 'ru'], siteConfig: config, pages: [],
        translationMisses: { en: [url], ru: [] },
        page: { url, bundle: 'methodology', head: { title: 'Test', meta: {} } }
    } } });
    const links = result.head.flat().filter(item => item && item.tag === 'link');
    assert.equal(links.find(item => item.attrs.rel === 'canonical').attrs.href, config.origins.ru + url);
    assert.deepEqual(Array.from(links.filter(item => item.attrs.rel === 'alternate'), item => item.attrs.hreflang), ['ru']);
});

test('production redirects are crawlable and point to the original language domains', t => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'bem-production-redirects-'));
    t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));
    const ru = path.join(fixture, 'ru');
    fs.mkdirSync(ru);
    fs.writeFileSync(path.join(ru, 'index.html'), 'home');
    const production = siteConfig('production');
    const outputDir = path.join(fixture, 'redirects');
    generateDomainRedirects({ languageDirs: { ru }, outputDir, config: production });
    const html = fs.readFileSync(path.join(outputDir, 'ru/index.html'), 'utf8');
    assert.equal(navigate(html, 'https://bem.info/ru/?q=1#x'), 'https://ru.bem.info/?q=1#x');
    assert.ok(!html.includes('noindex'));
    assert.ok(!fs.readFileSync(path.join(outputDir, 'robots.txt'), 'utf8').includes('Disallow: /'));
});
