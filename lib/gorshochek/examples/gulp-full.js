const gulp = require('gulp');
const gorshochek = require('../index');

const token = process.env.TOKEN;

const model = gorshochek.createModel();
const tasks = gorshochek.tasks;

gulp.task('merge-model', tasks.core.mergeModels(model, {modelPath: './examples/model.ru.json'}));
gulp.task('process-model', ['merge-model']);

gulp.task('load-from-github', ['process-model'], tasks.docs.loadSourceFromGithub(model, {token}));
gulp.task('load-from-file', ['process-model'], tasks.docs.loadSourceFromLocal(model));
gulp.task('transform-md-html', ['load-from-github', 'load-from-file'], tasks.docs.transformMdToHtml(model));
gulp.task('process-docs', ['transform-md-html']);

gulp.task('header-title', ['process-model'], tasks.page.createHeaderTitle(model));
gulp.task('header-meta', ['process-model'], tasks.page.createHeaderMeta(model));
gulp.task('breadcrumbs', ['process-model'], tasks.page.createBreadcrumbs(model));
gulp.task('page-meta', ['header-title', 'header-meta', 'breadcrumbs']);

gulp.task('sitemap-xml', ['process-model'], tasks.sitemap.createSitemapXML(model, {host: 'https://ru.bem.info'}));

gulp.task('save-model', ['process-docs', 'page-meta', 'sitemap-xml'], tasks.core.saveModel(model));
gulp.task('rsync', ['save-model'], tasks.core.rsync(model, {
    dest: './data',
    exclude: ['*.meta.json', 'model.json', '*.md']
}));

gulp.task('default', ['rsync']);
