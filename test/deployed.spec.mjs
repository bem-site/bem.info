import { test, expect } from '@playwright/test';
import siteConfig from '../lib/site-config.cjs';

const config = siteConfig();
const pagePath = '/methodology/quick-start/';

for (const lang of ['ru', 'en']) {
    test(`${lang}: apex redirect, resources, canonical and language switch`, async ({ page }) => {
        const failures = [];
        page.on('response', response => {
            if (Object.values(config.origins).some(origin => response.url().startsWith(origin + '/')) &&
                response.status() >= 400) failures.push(response.url() + ' ' + response.status());
        });
        await page.goto(config.apex + '/' + lang + pagePath + '?migration=1#check');
        await expect(page).toHaveURL(config.origins[lang] + pagePath + '?migration=1#check');
        await expect(page.locator('html')).toHaveAttribute('lang', lang);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', config.origins[lang] + pagePath);
        await expect(page.locator('h1').first()).not.toBeEmpty();
        const other = lang === 'ru' ? 'en' : 'ru';
        await page.locator('.lang-switcher__link').click();
        await expect(page).toHaveURL(config.origins[other] + pagePath);
        await expect(page.locator('html')).toHaveAttribute('lang', other);
        expect(failures).toEqual([]);
    });

    test(`${lang}: search loads its index and opens a result on the same domain`, async ({ page }) => {
        await page.goto(config.origins[lang] + pagePath);
        await page.locator('.search__submit').click();
        const input = page.locator('input[name="q"]');
        await expect(input).toBeVisible();
        await input.fill(lang === 'ru' ? 'элемент' : 'element');
        const hit = page.locator('.search__hit').first();
        await expect(hit).toBeVisible({ timeout: 30000 });
        const href = await hit.getAttribute('href');
        expect(new URL(href).origin).toBe(config.origins[lang]);
        expect(new URL(href).pathname).not.toMatch(/^\/(ru|en)\//);
        await hit.click();
        await expect(page).toHaveURL(href);
        await expect(page.locator('h1').first()).not.toBeEmpty();
    });
}

test('unknown prefixed paths still migrate to the corresponding language domain', async ({ page }) => {
    await page.goto(config.apex + '/ru/does-not-exist/?migration=1#check');
    await expect(page).toHaveURL(config.origins.ru + '/does-not-exist/?migration=1#check');
});

test('language roots redirect directly to language homepages', async ({ page }) => {
    for (const lang of ['ru', 'en']) {
        await page.goto(config.apex + '/' + lang + '/');
        await expect(page).toHaveURL(config.origins[lang] + '/');
        await expect(page.locator('html')).toHaveAttribute('lang', lang);
    }
});
