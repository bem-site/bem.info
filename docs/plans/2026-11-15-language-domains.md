# Return bem.info to language domains

All sources, generators, tests and workflow configuration live in `bem-site/bem.info`.
The three public repositories below contain generated files only. CI commits into
their `gh-pages` branches using one write-enabled deploy key per repository.

| Generated repository | Directory | Staging domain | Production domain |
| --- | --- | --- | --- |
| bem-site/generated-bem-info-ru | output/bem.info/ru | ru-test.bem.info | ru.bem.info |
| bem-site/generated-bem-info-en | output/bem.info/en | en-test.bem.info | en.bem.info |
| bem-site/generated-bem-info | output/generated-bem-info | test.bem.info | bem.info |

## Build and publish

`DEPLOY_ENV=staging` selects the test domains; `DEPLOY_ENV=production` selects
the original public domains. The default for local builds is production. CI uses
the `PAGES_DEPLOY_ENV` repository variable, falling back to staging. Manual
workflow runs default to configured (the repository variable) and can explicitly select staging or production.

The build produces language-root pages, relative local assets, absolute
cross-language links and canonical/hreflang URLs. Search indexes contain paths
without language prefixes. `node scripts/prepare-publications.mjs` then
generates the apex redirects, CNAME, .nojekyll and deployment.json in all three
publications. deployment.json identifies the source revision and environment.

Exact HTML paths, including legacy aliases, are mirrored under /ru/ and /en/ in
the apex publication. Known paths serve HTML redirect pages rather than a 404.
The 404 fallback handles unknown /ru/ and /en/ paths. JavaScript preserves the
query and fragment; meta refresh and a normal link provide a fallback.
These are client redirects, not HTTP 301 responses.

Source-repository secrets:

- PAGES_RU_DEPLOY_KEY
- PAGES_EN_DEPLOY_KEY
- PAGES_REDIRECTS_DEPLOY_KEY

The old redirect repositories are not publication targets.

## Staging verification

1. Publish staging and enable Pages from gh-pages / in each generated repository.
2. Configure the three staging custom domains. First try the existing DNS;
   explicit CNAME records to bem-site.github.io are only needed if GitHub cannot
   provision the staging domains through the existing alias chain.
3. Verify HTTPS and deployment.json on all three domains.
4. Run `DEPLOY_ENV=staging npm run test:deployed`. To test behavior while
   certificate provisioning is pending, use
   `DEPLOY_ENV=staging ALLOW_INVALID_CERTIFICATES=1 npm run test:deployed`.
   This exception does not count as a successful TLS verification.
5. Verify redirects, CSS/JS, language switching, canonical tags, both search
   indexes and links from search results. Staging is excluded from indexing.

## Production cutover

Only proceed after staging has passed.

1. Run Build & Deploy with environment=production and publish_target=none.
   Record the run ID. This generates the complete production artifact without
   changing a public site. Use that artifact_run_id for both publication runs.
   Metadata validation rejects artifacts built for a different environment.
2. Publish the language files with environment=production,
   publish_target=languages and the saved artifact_run_id. The old repositories
   still own the public domains at this point.
3. Disable Pages on ru-bem-info-to-bem-info-redirect and
   en-bem-info-to-bem-info-redirect, preserving their files and histories.
   Bind ru.bem.info and en.bem.info to the new language repositories and request
   Pages builds if needed.
4. Verify deployment.json, real pages, language switching, both search indexes
   and valid HTTPS on the language domains. Enable HTTPS enforcement.
5. Keep bem.info on its previous language-directory site for at least ten
   minutes after the language cutover. The old client redirects have
   Cache-Control: max-age=600; this interval lets browser and CDN copies expire
   before reverse redirects can create a loop with cached old redirects.
6. Publish the apex files with environment=production,
   publish_target=redirects and the same artifact_run_id. This can be prepared
   during the cache interval while the old source repository still owns bem.info.
7. After the interval, disable Pages on the source repository to release
   bem.info. Bind it to generated-bem-info, request a Pages build if needed,
   and verify valid HTTPS and the complete reverse-redirect chains.
8. Set PAGES_DEPLOY_ENV=production and merge the workflow changes for future
   push/scheduled builds. Manual runs default to the configured environment.
9. Run `DEPLOY_ENV=production npm run test:deployed` with certificate
   verification enabled.

Language sites must be ready before the apex begins redirecting to them. Existing
DNS may remain unchanged when all domains already resolve to GitHub Pages.
GitHub may clear a generated site's custom domain when a publication CNAME names
a domain still owned by the previous site. Bind it explicitly after releasing
the old Pages site; repository contents remain generated by CI.

## Rollback order

Restore bem.info to the previous language-directory deployment first. Only then
restore the old language-domain redirect sites. Reversing this order creates a
redirect loop. Keep the previous generated revisions until cutover verification
is complete.
