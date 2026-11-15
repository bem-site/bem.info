import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './test',
    testMatch: 'deployed.spec.mjs',
    outputDir: 'output/browser-checks',
    timeout: 60000,
    use: {
        browserName: 'chromium',
        ignoreHTTPSErrors: process.env.ALLOW_INVALID_CERTIFICATES === '1',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure'
    }
});
