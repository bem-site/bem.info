import fs from 'node:fs';
import path from 'node:path';
import siteConfig from '../lib/site-config.cjs';
import { generateDomainRedirects } from './generate-domain-redirects.mjs';

const config = siteConfig();
const root = path.resolve(import.meta.dirname, '..');
const languageDirs = Object.fromEntries(Object.keys(config.origins)
    .map(lang => [lang, path.join(root, 'output', 'bem.info', lang)]));
const outputDir = path.join(root, 'output', 'generated-bem-info');
fs.rmSync(outputDir, { recursive: true, force: true });
const count = generateDomainRedirects({ languageDirs, outputDir, config });
const publications = [
    ...Object.entries(languageDirs).map(([lang, dir]) => ({ dir, origin: config.origins[lang] })),
    { dir: outputDir, origin: config.apex }
];
for (const { dir, origin } of publications) {
    fs.writeFileSync(path.join(dir, '.nojekyll'), '');
    fs.writeFileSync(path.join(dir, 'CNAME'), new URL(origin).hostname + '\n');
    fs.writeFileSync(path.join(dir, 'deployment.json'), JSON.stringify({
        source: 'bem-site/bem.info',
        revision: process.env.GITHUB_SHA || 'local',
        environment: config.environment,
        origin
    }, null, 2) + '\n');
    if (config.environment === 'staging') {
        fs.writeFileSync(path.join(dir, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
    }
}
console.log(`Prepared three publications and ${count} explicit language-domain redirects (${config.environment}).`);
