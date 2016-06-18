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
      uk: 'Іменування файлів',
      en: 'File naming',
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
      ru: 'https://github.com/bemhint/bemhint-deps-schema/blob/master/README.ru.md',
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
    tags: ['toolbox', 'sdk', 'bem-walk'],
    bundle: 'toolbox',
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
      ru: './content/platform/platform.ru.bemjson.js',
      uk: './content/platform/platform.uk.bemjson.js',
      en: './content/platform/platform.en.bemjson.js',
    },
    tags: ['platform'],
    type: 'bemjson.js',
    bundle: 'platform-index',
    prev: false
  },
/*
  {
    url: '/platform/techs/',
    site: '/platform/techs/',
    title: {
      ru: 'Технологии',
      uk: 'Технології',
      en: 'Technologies',
    },
    source: {
      ru: './content/platform/platform.ru.bemjson.js',
      uk: './content/platform/platform.ru.bemjson.js',
      en: './content/platform/platform.ru.bemjson.js',
    },
    tags: ['platform', 'techs'],
    bundle: 'platform'
  },
*/
  {
    url: '/platform/bemjson/',
    site: '/platform/bemjson/',
    title: {
      ru: 'Данные (BEMJSON)',
      uk: 'Дані (BEMJSON)',
      en: 'Data (BEMJSON)'
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/4-data.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/4-data.md',
    },
    tags: ['platform', 'bemjson'],
    bundle: 'platform'
  },
  {
    url: '/platform/bem-xjst/',
    site: '/platform/bem-xjst/',
    title: {
      ru: 'Шаблоны (BEMHTML, BEMTREE)',
      uk: 'Шаблони (BEMHTML, BEMTREE)',
      en: 'Templates (BEMHTML, BEMTREE)',
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/1-about.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/1-about.md',
    },
    tags: ['platform', 'bem-xjst'],
    bundle: 'platform'
  },
  {
    url: '/platform/bem-xjst/quick-start/',
    site: '/platform/bem-xjst/',
    title: {
      ru: 'Быстрый старт',
      uk: 'Швидкий старт',
      en: 'Quick start',
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/2-quick-start.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/2-quick-start.md',
    },
    tags: ['platform', 'bem-xjst'],
    bundle: 'platform'
  },
  {
    url: '/platform/bem-xjst/api/',
    site: '/platform/bem-xjst/',
    title: 'API',
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/3-api.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/3-api.md',
    },
    tags: ['platform', 'bem-xjst'],
    bundle: 'platform'
  },
  {
    url: '/platform/bem-xjst/templates-syntax/',
    site: '/platform/bem-xjst/',
    title: {
      ru: 'Синтаксис шаблонов',
      uk: 'Синтаксис шаблонів',
      en: 'Templates syntax',
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/5-templates-syntax.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/5-templates-syntax.md',
    },
    tags: ['platform', 'bem-xjst'],
    bundle: 'platform'
  },
  {
    url: '/platform/bem-xjst/templates-context/',
    site: '/platform/bem-xjst/',
    title: {
      ru: 'Контекст',
      uk: 'Контекст',
      en: 'Context',
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/6-templates-context.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/6-templates-context.md',
    },
    tags: ['platform', 'bem-xjst'],
    bundle: 'platform'
  },
  {
    url: '/platform/bem-xjst/runtime/',
    site: '/platform/bem-xjst/',
    title: 'Runtime',
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/ru/7-runtime.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/docs-anchors/docs/en/7-runtime.md',
    },
    tags: ['platform', 'bem-xjst'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Клиентский JavaScript (i-bem.js)',
      uk: 'Клієнтський JavaScript (i-bem.js)',
      en: 'Client-side JavaScript (i-bem.js)',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/overview/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Общие сведения',
      uk: 'Загальні відомості',
      en: 'Overview',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-common.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-common.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/html-binding/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Привязка JS-блоков к HTML',
      uk: 'Прив\'язка JS-блоків до HTML',
      en: 'Binding JS blocks to HTML',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-html-binding.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-html-binding.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/declaration/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Декларация блока',
      uk: 'Декларація блоку',
      en: 'Block declaration',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-decl.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-decl.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/parameters/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Передача параметров',
      uk: 'Передача параметрів',
      en: 'Passing parameters',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-params.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-params.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/dom/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Работа с DOM-деревом',
      uk: 'Робота з DOM-деревом',
      en: 'Working with the DOM tree',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-dom.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-dom.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/states/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Состояния блока',
      uk: 'Стану блоку',
      en: 'States of a block',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-states.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-states.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/events/',
    site: '/platform/i-bem/',
    title: {
      ru: 'События',
      uk: 'Події',
      en: 'Events',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-events.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-events.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/init/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Инициализация',
      uk: 'Ініціалізація',
      en: 'Initialization',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-init.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-init.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/interaction/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Взаимодействие блоков',
      uk: 'Взаємодія блоків',
      en: 'Interaction of blocks',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-interact.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-interact.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/context/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Контекст',
      uk: 'Контекст',
      en: 'Context',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-context.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-context.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/i-bem/extras/',
    site: '/platform/i-bem/',
    title: {
      ru: 'Что дальше?',
      uk: 'Що далі?',
      en: 'What next?',
    },
    source: {
      ru: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-extras.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-core/blob/v3/common.docs/i-bem-js/i-bem-js-extras.en.md',
    },
    tags: ['platform', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/deps/',
    site: '/platform/deps/',
    title: {
      ru: 'Зависимости',
      uk: 'Залежності',
      en: 'Dependencies'
    },
    description: {
      ru: 'deps.js — технология для декларирования зависимостей по БЭМ',
      // uk: '',
      en: 'deps.js — a technology to declare dependencies in BEM',
    },
    source: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/depsjs/depsjs.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/depsjs/depsjs.en.md',
    },
    tags: ['platform', 'deps'],
    bundle: 'platform'
  },
  {
    url: '/platform/project-stub/',
    site: '/platform/project-stub/',
    title: {
      ru: 'Заготовка проекта',
      uk: 'Заготівля проекту',
      en: 'Project stub',
    },
    source: {
      ru: 'https://github.com/bem/project-stub/blob/master/README.ru.md',
      // uk: '',
      en: 'https://github.com/bem/project-stub/blob/master/README.md',
    },
    tags: ['platform', 'project-stub'],
    bundle: 'platform'
  },
  {
    url: '/platform/libs/',
    site: '/platform/libs/',
    title: {
      ru: 'Библиотеки',
      uk: 'Бібліотеки',
      en: 'Libraries',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/platform/libs/index.ru.md',
      uk: 'https://github.com/bem/bem-method/blob/bem-info-data/platform/libs/index.uk.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/platform/libs/index.en.md',
    },
    tags: ['platform', 'libs'],
    bundle: 'platform'
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
    tags: ['platform', 'libs', 'bem-core'],
    bundle: 'platform',
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
    tags: ['platform', 'libs', 'bem-components'],
    bundle: 'platform',
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
    tags: ['platform', 'libs', 'bem-history'],
    bundle: 'platform',
    level: 2
  },
  {
    url: '/platform/tutorials/',
    site: '/platform/tutorials/',
    title: {
      ru: 'Учебные материалы',
      uk: 'Навчальні матеріали',
      en: 'Tutorials',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/platform/tutorials/index.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/platform/tutorials/index.en.md',
    },
    tags: ['platform', 'tutorials'],
    bundle: 'platform'
  },
  {
    url: '/platform/tutorials/quick-start-static/',
    site: '/platform/tutorials/',
    title: {
      ru: 'Собираем статическую страницу',
      uk: 'Збираємо статичну сторінку',
      en: 'Creating a static page',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/quick-start-static/quick-start-static.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/quick-start-static/quick-start-static.en.md',
    },
    tags: ['platform', 'tutorials', 'project-stub'],
    bundle: 'platform'
  },
  {
    url: '/platform/tutorials/start-with-project-stub/',
    site: '/platform/tutorials/',
    title: {
      ru: 'Создаём свой проект на БЭМ',
      uk: 'Створюємо свій проект на БЕМ',
      en: 'Starting your own BEM project',
    },
    source: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/start-with-project-stub/start-with-project-stub.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/start-with-project-stub/start-with-project-stub.en.md',
    },
    tags: ['platform', 'tutorials', 'project-stub'],
    bundle: 'platform'
  },
/*
  {
    url: '/platform/tutorials/project-stub/',
    site: '/platform/tutorials/',
    title: {
      ru: 'Заготовка проекта',
      uk: 'Заготівля проекту',
      en: 'Project Stub',
    },
    source: {
      ru: 'https://github.com/bem/project-stub/blob/bem-core/README.ru.md',
      // uk: '',
      en: 'https://github.com/bem/project-stub/blob/bem-core/README.md',
    },
    tags: ['platform', 'tutorials', 'project-stub'],
    bundle: 'platform'
  },
*/
  {
    url: '/platform/tutorials/i-bem/',
    site: '/platform/tutorials/i-bem/',
    title: {
      ru: 'Справочное руководство по i-bem.js',
      uk: 'Довідкове керівництво по i-bem.js',
      en: 'i-bem.js tutorial',
    },
    source: {
      ru: 'https://github.com/bem/bem-js-tutorial/blob/master/00-Intro/00-Intro.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-js-tutorial/blob/master/00-Intro/00-Intro.en.md',
    },
    tags: ['platform', 'tutorials', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/tutorials/i-bem/block/',
    site: '/platform/tutorials/i-bem/',
    title: {
      ru: 'Описание структуры блока',
      uk: 'Опис структури блоку',
      en: 'Block structure',
    },
    source: {
      ru: 'https://github.com/bem/bem-js-tutorial/blob/master/01-Block-structure/01-Block-structure.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-js-tutorial/blob/master/01-Block-structure/01-Block-structure.en.md',
    },
    tags: ['platform', 'tutorials', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/tutorials/i-bem/modifiers/',
    site: '/platform/tutorials/i-bem/',
    title: {
      ru: 'Модификаторы блока',
      uk: 'Модифікатори блоку',
      en: 'Modifiers',
    },
    source: {
      ru: 'https://github.com/bem/bem-js-tutorial/blob/master/02-Modifiers/02-Modifiers.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-js-tutorial/blob/master/02-Modifiers/02-Modifiers.en.md',
    },
    tags: ['platform', 'tutorials', 'i-bem'],
    bundle: 'platform'
  },
  {
    url: '/platform/tutorials/i-bem/live-init/',
    site: '/platform/tutorials/i-bem/',
    title: {
      ru: 'Живая (ленивая) инициализация',
      uk: 'Жива (лінива) ініціалізація',
      en: 'Live (lazy) initialization',
    },
    source: {
      ru: 'https://github.com/bem/bem-js-tutorial/blob/master/03-Live-initialization/03-Live-initialization.ru.md',
      // uk: '',
      en: 'https://github.com/bem/bem-js-tutorial/blob/master/03-Live-initialization/03-Live-initialization.en.md',
    },
    tags: ['platform', 'tutorials', 'i-bem'],
    bundle: 'platform',
    next: false
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
