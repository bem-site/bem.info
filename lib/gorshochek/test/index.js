require('./src/model.test');
require('./src/util.test');

// require('./src/tasks-libraries/model/base.test.js');
// require('./src/tasks-libraries/model/block.test.js');
// require('./src/tasks-libraries/model/document.test.js');
// require('./src/tasks-libraries/model/level.test.js');
// require('./src/tasks-libraries/model/version.test.js');

require('./src/tasks/core/merge-models.test');
require('./src/tasks/core/save-model.test');
require('./src/tasks/core/import-model.test');
require('./src/tasks/core/rsync.test');

require('./src/tasks/docs/github/index.test');

require('./src/tasks/docs/load-from-github.test');
require('./src/tasks/docs/load-from-file.test');
require('./src/tasks/docs/load-from-http.test');
require('./src/tasks/docs/transform-md-html.test');

require('./src/tasks/meta/tags.test');

require('./src/tasks/override/util.test');
require('./src/tasks/override/override-doc-links.test');
require('./src/tasks/override/process-doc-images.test');

require('./src/tasks/page/util.test');
require('./src/tasks/page/header-title.test');
require('./src/tasks/page/header-meta.test');
require('./src/tasks/page/breadcrumbs.test');
require('./src/tasks/page/search-meta.test');

require('./src/tasks/sitemap/sitemap-xml.test');

require('./src/tasks/template/full-bem.test');

const Model = require('../src/model');
const gorshochek = require('../index');

describe('index', function() {
    it('should return Model class instance as result of "createModel" method', function() {
        gorshochek.createModel().should.be.instanceOf(Object);
    });
});
