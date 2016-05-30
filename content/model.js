module.exports = [
  {
    url: '/',
    site: '/',
    title: {
      ru: 'БЭМ',
      uk: 'БЕМ',
      en: 'BEM',
    },
    source: {
      ru: './content/index/index.ru.bemjson.js',
      uk: './content/index/index.uk.bemjson.js',
      en: './content/index/index.en.bemjson.js',
    },
    type: 'bemjson.js',
    bundle: 'index'
  },
  {
    url: '/methodology/',
    site: '/methodology/',
    title: {
      ru: 'Методология',
      uk: 'Методологія',
      en: 'Methodology'
    },
    source: {
      ru: './content/methodology/methodology.ru.bemjson.js',
      uk: './content/methodology/methodology.uk.bemjson.js',
      en: './content/methodology/methodology.en.bemjson.js',
    },
    tags: ['methodology'],
    type: 'bemjson.js',
    bundle: 'methodology-index'
  },
  {
    url: '/methodology/key-concepts/',
    site: '/methodology/',
    title: {
      ru: 'Основные понятия',
      uk: 'Основні поняття',
      en: 'Key concepts'
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology',
    prev: false
  },
  {
    url: '/methodology/naming-convention/',
    site: '/methodology/',
    title: {
      ru: 'Соглашение по именованию',
      uk: 'Угода щодо іменування',
      en: 'Naming convention',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/js/',
    site: '/methodology/',
    title: {
      ru: 'JavaScript',
      uk: 'JavaScript',
      en: 'JavaScript',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/js-principles/',
    site: '/methodology/',
    title: {
      ru: 'Особенности JavaScript',
      uk: 'Особливості JavaScript',
      en: 'JavaScript principles',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/bem-js-principles/bem-js-principles.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/bem-js-principles/bem-js-principles.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/bem-js-principles/bem-js-principles.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/filesystem/',
    site: '/methodology/',
    title: {
      ru: 'Файловая система',
      uk: 'Файлова система',
      en: 'Filesystem',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/filesystem/filesystem.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/filesystem/filesystem.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/filesystem/filesystem.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/build/',
    site: '/methodology/',
    title: {
      ru: 'Сборка',
      uk: 'Збірка',
      en: 'Build',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/build/build.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/build/build.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/build/build.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/declarations/',
    site: '/methodology/',
    title: {
      ru: 'Декларации',
      uk: 'Декларації',
      en: 'Declarations',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/declarations/declarations.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/declarations/declarations.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/declarations/declarations.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/solved-problems/',
    site: '/methodology/',
    title: {
      ru: 'Какие проблемы решает',
      uk: 'Які проблеми вирішує',
      en: 'Solved problems',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/history/',
    site: '/methodology/',
    title: {
      ru: 'История создания',
      uk: 'Історія створення',
      en: 'History',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/method/history/history.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/method/history/history.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/method/history/history.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/articles/',
    site: '/methodology/',
    title: {
      ru: 'Статьи',
      uk: 'Статті',
      en: 'Articles',
    },
    source: {
      ru: './content/methodology/articles.ru.js',
      uk: './content/methodology/articles.uk.js',
      en: './content/methodology/articles.en.js',
    },
    tags: ['methodology'],
    type: 'articles',
    bundle: 'methodology'
  },
  {
    url: '/methodology/faq/',
    site: '/methodology/',
    title: 'FAQ',
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/faq/faq.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/faq/faq.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/faq/faq.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology',
    next: false
  },

  {
    url: '/toolbox/',
    site: '/toolbox/',
    title: {
      ru: 'Инструментарий',
      uk: 'Інструментарій',
      en: 'Toolbox',
    },
    source: {
      ru: './content/toolbox/toolbox.ru.bemjson.js',
      uk: './content/toolbox/toolbox.uk.bemjson.js',
      en: './content/toolbox/toolbox.en.bemjson.js',
    },
    tags: ['toolbox'],
    type: 'bemjson.js',
    bundle: 'toolbox-index'
  },
  {
    url: '/toolbox/enb/',
    site: '/toolbox/enb/',
    title: 'ENB',
    description: {
      ru: 'ENB — сборщик проектов, построенных по методологии БЭМ',
      // uk: 'ENB — сборщик проектов, построенных по методологии БЭМ', // TODO
      en: 'ENB — a tool for building web projects based on BEM methodology'
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/tools/enb-overview.ru.md',
      // uk: 'https://github.com/bem/bem-method/blob/bem-info-data/tools/enb-overview.ru.md', // TODO
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/tools/enb-overview.en.md',
    },
    tags: ['toolbox', 'enb'],
    bundle: 'toolbox',
    prev: false
  },
  {
    url: '/toolbox/enb/enb-bem-techs/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: 'enb-bem-techs',
    description: {
      ru: 'Пакет для сборки проектов, в основе которых лежит БЭМ методология',
      // uk: '',
      // en: '',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/build-bundle/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Сборка бандла',
      uk: 'Збірка бандла',
      en: 'Build bundle',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-bundle.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/build-page/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Сборка страницы',
      uk: 'Збірка сторінки',
      en: 'Build page',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-page.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/build-merged-bundle/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Сборка merged-бандла',
      uk: 'Збірка merged-бандла',
      en: 'Build merged bundle',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-merged-bundle.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/build-dist/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Сборка дистрибутива',
      uk: 'Збірка дистрибутиву',
      en: 'Build distribution',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-dist.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/api/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/changelog/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/migration-2/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Миграция на 2.0',
      uk: 'Міграція на 2.0',
      en: 'Migration to 2.0',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/MIGRATION-2.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-techs/migration-1/',
    site: '/toolbox/enb/enb-bem-techs/',
    title: {
      ru: 'Миграция на 1.0',
      uk: 'Міграція на 1.0',
      en: 'Migration to 1.0',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/MIGRATION-1.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-js/',
    site: '/toolbox/enb/enb-js/',
    title: 'enb-js',
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-js'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-js/api/',
    site: '/toolbox/enb/enb-js/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-js'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-js/changelog/',
    site: '/toolbox/enb/enb-js/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-js'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-modules/',
    site: '/toolbox/enb/enb-modules/',
    title: 'enb-modules',
    source: {
      ru: 'https://github.com/enb/enb-modules/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-modules'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-modules/changelog/',
    site: '/toolbox/enb/enb-modules/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-modules/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-modules'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-css/',
    site: '/toolbox/enb/enb-css/',
    title: 'enb-css',
    description: {
      ru: 'Поддержка CSS для ENB',
      uk: 'Підтримка CSS для ENB',
      en: 'CSS support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-css'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-css/ie/',
    site: '/toolbox/enb/enb-css/',
    title: {
      ru: 'Сборка бандла для IE',
      uk: 'Збірка бандла для IE',
      en: 'Build bundle for IE',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/docs/ie.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-css'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-css/api/',
    site: '/toolbox/enb/enb-css/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/docs/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-css'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-css/changelog/',
    site: '/toolbox/enb/enb-css/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-css'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-stylus/',
    site: '/toolbox/enb/enb-stylus/',
    title: 'enb-stylus',
    description: {
      ru: 'Поддержка Stylus для ENB',
      uk: 'Підтримка Stylus для ENB',
      en: 'Stylus support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-stylus'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-stylus/api/',
    site: '/toolbox/enb/enb-stylus/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-stylus'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-stylus/changelog/',
    site: '/toolbox/enb/enb-stylus/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-stylus'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bemxjst/',
    site: '/toolbox/enb/enb-bemxjst/',
    title: 'enb-bemxjst',
    description: {
      ru: 'Поддержка bem-xjst для ENB',
      uk: 'Підтримка bem-xjst для ENB',
      en: 'bem-xjst support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bemxjst'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bemxjst/api/',
    site: '/toolbox/enb/enb-bemxjst/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bemxjst'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bemxjst/changelog/',
    site: '/toolbox/enb/enb-bemxjst/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bemxjst'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bh/',
    site: '/toolbox/enb/enb-bh/',
    title: 'enb-bh',
    description: {
      ru: 'Поддержка BH для ENB',
      uk: 'Підтримка BH для ENB',
      en: 'BH support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bh'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bh/api/',
    site: '/toolbox/enb/enb-bh/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bh'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bh/changelog/',
    site: '/toolbox/enb/enb-bh/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bh'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bh/migration-1/',
    site: '/toolbox/enb/enb-bh/',
    title: {
      ru: 'Миграция на 1.0',
      uk: 'Міграція на 1.0',
      en: 'Migration to 1.0',
    },
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/MIGRATION-1.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-techs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-i18n/',
    site: '/toolbox/enb/enb-bem-i18n/',
    title: 'enb-bem-i18n',
    description: {
      ru: 'Поддержка i18n для ENB',
      uk: 'Підтримка i18n для ENB',
      en: 'I18n support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-i18n'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-i18n/api/',
    site: '/toolbox/enb/enb-bem-i18n/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-i18n'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-i18n/changelog/',
    site: '/toolbox/enb/enb-bem-i18n/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-i18n'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-borschik/',
    site: '/toolbox/enb/enb-borschik/',
    title: 'enb-borschik',
    description: {
      ru: 'Поддержка borschik для ENB',
      uk: 'Підтримка borschik для ENB',
      en: 'borschik support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-borschik/api/',
    site: '/toolbox/enb/enb-borschik/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-borschik/changelog/',
    site: '/toolbox/enb/enb-borschik/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-specs/',
    site: '/toolbox/enb/enb-bem-specs/',
    title: 'enb-bem-specs',
    description: {
      ru: 'Поддержка bem-specs для ENB',
      uk: 'Підтримка bem-specs для ENB',
      en: 'bem-specs support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-specs/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-specs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-specs/changelog/',
    site: '/toolbox/enb/enb-bem-specs/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-specs/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-specs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-tmpl-specs/',
    site: '/toolbox/enb/enb-bem-tmpl-specs/',
    title: 'enb-bem-tmpl-specs',
    description: {
      ru: 'Поддержка bem-tmpl-specs для ENB',
      uk: 'Підтримка bem-tmpl-specs для ENB',
      en: 'bem-tmpl-specs support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-tmpl-specs/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-tmpl-specs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-tmpl-specs/changelog/',
    site: '/toolbox/enb/enb-bem-tmpl-specs/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-tmpl-specs/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-tmpl-specs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-examples/',
    site: '/toolbox/enb/enb-bem-examples/',
    title: 'enb-bem-examples',
    description: {
      ru: 'Поддержка bem-examples для ENB',
      uk: 'Підтримка bem-examples для ENB',
      en: 'bem-examples support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-examples/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-examples'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-examples/changelog/',
    site: '/toolbox/enb/enb-bem-examples/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-examples/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-examples'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-docs/',
    site: '/toolbox/enb/enb-bem-docs/',
    title: 'enb-bem-docs',
    description: {
      ru: 'Поддержка bem-docs для ENB',
      uk: 'Підтримка bem-docs для ENB',
      en: 'bem-docs support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-docs/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-docs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-bem-docs/changelog/',
    site: '/toolbox/enb/enb-bem-docs/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-docs/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-bem-docs'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-magic-platform/',
    site: '/toolbox/enb/enb-magic-platform/',
    title: 'enb-magic-platform',
    description: {
      ru: 'Поддержка magic-platform для ENB',
      uk: 'Підтримка magic-platform для ENB',
      en: 'magic-platform support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-platform/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-magic-platform'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-magic-platform/changelog/',
    site: '/toolbox/enb/enb-magic-platform/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-platform/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-magic-platform'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-magic-factory/',
    site: '/toolbox/enb/enb-magic-factory/',
    title: 'enb-magic-factory',
    description: {
      ru: 'Поддержка magic-factory для ENB',
      uk: 'Підтримка magic-factory для ENB',
      en: 'magic-factory support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-factory/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-magic-factory'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/enb-magic-factory/changelog/',
    site: '/toolbox/enb/enb-magic-factory/',
    title: {
      ru: 'Изменения',
      uk: 'Змінення',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-factory/blob/master/CHANGELOG.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'enb', 'enb-magic-factory'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/',
    site: '/toolbox/bemhint/',
    title: 'bemhint',
    source: {
      ru: 'https://github.com/bemhint/bemhint/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['toolbox', 'bemhint'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/css-naming/',
    site: '/toolbox/bemhint/css-naming/',
    title: {
      ru: 'CSS именование',
      uk: 'CSS іменування',
      en: 'CSS naming',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-css-naming/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bemhint/bemhint-css-naming/blob/master/README.md',
    },
    tags: ['toolbox', 'bemhint', 'bemhint-css-naming'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/fs-naming/',
    site: '/toolbox/bemhint/fs-naming/',
    title: {
      ru: 'Именование файлов',
      // uk: '',
      // en: '',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-fs-naming/blob/master/README.ru.md',
      // uk: '',
      en: 'https://github.com/bemhint/bemhint-fs-naming/blob/master/README.md',
    },
    tags: ['toolbox', 'bemhint', 'bemhint-fs-naming'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/deps-schema/',
    site: '/toolbox/bemhint/deps-schema/',
    title: {
      ru: 'DEPS схема',
      uk: 'DEPS схема',
      en: 'DEPS schema',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-deps-schema/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bemhint/bemhint-deps-schema/blob/master/README.md',
    },
    tags: ['toolbox', 'bemhint', 'bemhint-deps-schema'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/deps-specification/',
    site: '/toolbox/bemhint/deps-specification/',
    title: {
      ru: 'DEPS спецификация',
      uk: 'DEPS специфікація',
      en: 'DEPS specification',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-deps-specification/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bemhint/bemhint-deps-specification/blob/master/README.md',
    },
    tags: ['toolbox', 'bemhint', 'bemhint-deps-specification'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bem-tools/',
    site: '/toolbox/bem-tools/',
    title: 'bem-tools',
    source: {
      // ru: 'https://github.com/bem/bem-tools/blob/newPluginSearchAlgo@WIP/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bem/bem-tools/blob/newPluginSearchAlgo@WIP/README.md',
    },
    tags: ['toolbox', 'bem-tools'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemmet/',
    site: '/toolbox/bemmet/',
    title: 'bemmet',
    source: {
      // ru: 'https://github.com/tadatuta/bemmet/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/tadatuta/bemmet/blob/master/README.md',
    },
    tags: ['toolbox', 'bemmet'],
    bundle: 'toolbox'
  },

  {
    url: '/toolbox/sdk/',
    site: '/toolbox/sdk/',
    title: 'SDK',
    source: {
      ru: 'https://github.com/bem-sdk/bem-sdk/blob/master/README.ru.md',
      // uk: 'https://github.com/bem-sdk/bem-sdk/blob/master/README.uk.md',
      en: 'https://github.com/bem-sdk/bem-sdk/blob/master/README.md',
    },
    tags: ['toolbox', 'sdk'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming/',
    site: '/toolbox/sdk/bem-naming/',
    title: 'bem-naming',
    source: {
      ru: 'https://github.com/bem-sdk/bem-naming/blob/master/README.ru.md',
      // uk: 'https://github.com/bem-sdk/bem-naming/blob/master/README.uk.md',
      en: 'https://github.com/bem-sdk/bem-naming/blob/master/README.md',
    },
    tags: ['toolbox', 'sdk', 'bem-naming'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-config/',
    site: '/toolbox/sdk/bem-config/',
    title: 'bem-config',
    source: {
      // ru: 'https://github.com/bem-sdk/bem-config/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bem-sdk/bem-config/blob/master/README.md',
    },
    tags: ['toolbox', 'sdk', 'bem-config'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-fs-scheme/',
    site: '/toolbox/sdk/bem-fs-scheme/',
    title: 'bem-fs-scheme',
    source: {
      // ru: 'https://github.com/bem-sdk/bem-fs-scheme/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bem-sdk/bem-fs-scheme/blob/master/README.md',
    },
    tags: ['toolbox', 'sdk', 'bem-fs-scheme'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-deps/',
    site: '/toolbox/sdk/bem-deps/',
    title: 'bem-deps',
    source: {
      // ru: 'https://github.com/bem-sdk/bem-deps/blob/master/README.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bem-sdk/bem-deps/blob/master/README.md',
    },
    tags: ['toolbox', 'sdk', 'bem-deps'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-walk/',
    site: '/toolbox/sdk/bem-walk/',
    title: 'bem-walk',
    source: {
      // ru: 'https://github.com/bem-sdk/bem-walk/blob/master/README.ru.md', //TODO
      // uk: '',
      en: 'https://github.com/bem-sdk/bem-walk/blob/master/README.md',
    },
    bundle: 'toolbox',
    tags: ['toolbox', 'sdk', 'bem-walk'],
    next: false
  },

  {
    url: '/platform/',
    site: '/platform/',
    title: {
      ru: 'Платформа',
      uk: 'Платформа',
      en: 'Platform',
    },
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    disabled: true,
    nav: false
  },
  {
    url: '/platform/techs/',
    site: '/platform/techs/',
    title: {
      ru: 'Технологии',
      uk: 'Технології',
      en: 'Technologies',
    },
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    disabled: true
  },
  {
    url: '/technology/i-bem/v2/i-bem-js/',
    site: '/platform/techs/i-bem/',
    title: 'i-bem',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },
  {
    url: '/technology/deps/about/',
    site: '/platform/techs/deps/',
    title: 'DEPS',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },
  {
    url: '/technology/bemjson/v2/bemjson/',
    site: '/platform/techs/bemjson/',
    title: 'BEMJSON',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },
  {
    url: '/technology/bemhtml/v2/intro/',
    site: '/platform/techs/bemhtml/',
    title: 'BEMHTML',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },
  {
    url: '/technology/bemtree/v2/bemtree/',
    site: '/platform/techs/bemtree/',
    title: 'BEMTREE',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },

  {
    url: '/libs/',
    site: '/platform/libs/',
    title: {
      ru: 'Библиотеки',
      uk: 'Бібліотеки',
      en: 'Libraries',
    },
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 1
  },
  {
    url: '/libs/bem-core/',
    site: '/platform/libs/bem-core/',
    title: 'bem-core',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },
  {
    url: '/libs/bem-components/',
    site: '/platform/libs/bem-components/',
    title: 'bem-components',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },
  {
    url: '/libs/bem-history/',
    site: '/platform/libs/bem-history/',
    title: 'bem-history',
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 2
  },

  {
    url: '/community/',
    site: '/community/',
    title: {
      ru: 'Сообщество',
      uk: 'Спільнота',
      en: 'Community',
    },
    source: {
      ru: './content/community/community.ru.bemjson.js',
      uk: './content/community/community.uk.bemjson.js',
      en: './content/community/community.en.bemjson.js',
    },
    type: 'bemjson.js',
    bundle: 'community-index',
    nav: false
  },
  {
    url: '/blog/',
    site: '/community/',
    title: {
      ru: 'Блог',
      uk: 'Блог',
      en: 'Blog',
    },
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 1,
    nav: false
  },
  {
    url: '/events/',
    site: '/community/',
    title: {
      ru: 'События',
      uk: 'Події',
      en: 'Events',
    },
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 1,
    nav: false
  },
  {
    url: '/forum/',
    site: '/community/',
    title: {
      ru: 'Форум',
      uk: 'Форум',
      en: 'Forum',
    },
    source: {
      ru: '',
      uk: '',
      en: '',
    },
    level: 1,
    nav: false
  }
];
