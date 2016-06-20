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
      ru: 'https://github.com/bemhint/bemhint/blob/master/README.ru.md',
      // uk: '',
      en: 'https://github.com/bemhint/bemhint/blob/master/README.md',
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
  },

// redirects
// methodology
  {
    url: [
      '/method/definitions',
      '/method/key-concepts',
    ],
    now: {
      ru: '/methodology/key-concepts/',
      en: '/methodology/key-concepts/',
    }
  },
  {
    url: [
    //'/method/naming-convention',
      '/method/naming',
    ],
    now: {
      ru: '/methodology/naming-convention/',
      en: '/methodology/naming-convention/',
    }
  },
  {
    url: '/method/filesystem',
    now: {
      ru: '/methodology/filesystem/',
      en: '/methodology/filesystem/',
    }
  },
  {
    url: [
    //'/method/build-method',
      '/method/build',
    ],
    now: {
      ru: '/methodology/build/',
      en: '/methodology/build/',
    }
  },
  {
    url: [
    //'/method/declarations',
      '/method/declaration',
    ],
    now: {
      ru: '/methodology/declarations/',
      en: '/methodology/declarations/',
    }
  },
  {
    url: '/method/solved-problems',
    now: {
      ru: '/methodology/solved-problems/',
      en: '/methodology/solved-problems/',
    }
  },
  {
    url: [
      '/method/faq',
      '/faq',
    ],
    now: {
      ru: '/methodology/faq/',
      en: '/methodology/faq/',
    }
  },
  {
    url: '/method/',
    now: {
      ru: '/methodology/',
      en: '/methodology/',
    }
  },

  // community
  {
    url: '/blog/bem-feedback',
    now: {
      ru: '/forum/-638/',
    }
  },
  {
    url: '/blog/bem-core-v3-plans',
    now: {
      ru: '/forum/-639/',
    }
  },
  {
    url: '/blog/bem-tools-0-5-33',
    now: {
      ru: '/forum/-640/',
    }
  },
  {
    url: '/events/webcamp-odessa-2015',
    now: {
      ru: '/forum/-641/',
    }
  },
  {
    url: [
    //'/events/bemup-minsk2014',
    //'/events/bemup-minsk-2014',
      '/events/bemup-minsk',
    ],
    now: {
      ru: '/forum/-642/',
    }
  },
  {
    url: '/events/yglf-telaviv-2015',
    now: {
      ru: '/forum/-643/',
    }
  },
  {
    url: '/blog/bem-components-v2',
    now: {
      ru: '/forum/-644/',
    }
  },
  {
    url: '/blog/first-bem-img',
    now: {
      ru: '/forum/-645/',
    }
  },
  {
    url: '/blog/enb-bem-techs-v200',
    now: {
      ru: '/forum/-646/',
    }
  },
  {
    url: '/blog/jsdoc-update',
    now: {
      ru: '/forum/-647/',
    }
  },
  {
    url: '/events/talksworks-spb-2015',
    now: {
      ru: '/forum/-648/',
    }
  },
  {
    url: '/blog/bem-forum-launch',
    now: {
      ru: '/forum/-649/',
    }
  },
  {
    url: '/events/metarefresh-bangalore-2013',
    now: {
      ru: '/forum/-650/',
    }
  },
  {
    url: '/talks/bemup-minsk-2014',
    now: {
      ru: '/forum/-651/',
    }
  },
  {
    url: '/talks/codefest-2015',
    now: {
      ru: '/forum/-652/',
    }
  },
  {
    url: '/events/beminar-april-2015',
    now: {
      ru: '/forum/-653/',
    }
  },
  {
    url: '/blog/bem-forum',
    now: {
      ru: '/forum/-654/',
    }
  },
  {
    url: '/blog/bem-cli',
    now: {
      ru: '/forum/-655/',
    }
  },
  {
    url: '/events/kyivjsmeetup-kiev-2015',
    now: {
      ru: '/forum/-656/',
    }
  },
  {
    url: [
    //'/events/bemup-moscow2014',
    //'/events/bemup-moscow-2014',
      '/events/bemup-moscow'
    ],
    now: {
      ru: '/forum/-657/',
    }
  },
  {
    url: '/blog/first-bem-blog',
    now: {
      ru: '/forum/-658/',
    }
  },
  {
    url: '/blog/bem-tools-status-freeze',
    now: {
      ru: '/forum/-659/',
    }
  },
  {
    url: '/talks/bemup-moscow-2014',
    now: {
      ru: '/forum/-660/',
    }
  },
  {
    url: '/talks/beminar-css-2015',
    now: {
      ru: '/forum/-661/',
    }
  },
  {
    url: '/blog/site-technologies',
    now: {
      ru: '/forum/-662/',
    }
  },
  {
    url: '/blog/digest-5',
    now: {
      ru: '/forum/-663/',
    }
  },
  {
    url: '/talks/bem-odessajs-2014',
    now: {
      ru: '/forum/-664/',
    }
  },
  {
    url: [
      '/blog/bemup-spb-2014',
      '/events/bemup-spb-2014',
    ],
    now: {
      ru: '/forum/-665/',
    }
  },
  {
    url: '/blog/enb-stylus-v200',
    now: {
      ru: '/forum/-666/',
    }
  },
  {
    url: '/blog/bem-competition-winners',
    now: {
      ru: '/forum/-667/',
    }
  },
  {
    url: '/blog/bem-components',
    now: {
      ru: '/forum/-668/',
    }
  },
  {
    url: [
    //'/events/bemup-yac-2013',
    //'/events/bemup-yac2013',
      '/events/bemup-yac',
      '/blog/bemup-yac2013',
    ],
    now: {
      ru: '/forum/-669/',
    }
  },
  {
    url: '/blog/first-bem-ide',
    now: {
      ru: '/forum/-670/',
    }
  },
  {
    url: '/blog/first-bem-build',
    now: {
      ru: '/forum/-671/',
    }
  },
  {
    url: '/blog/digest-4',
    now: {
      ru: '/forum/-672/',
    }
  },
  {
    url: '/talks/mercadolibre-argentina-2015',
    now: {
      ru: '/forum/-673/',
    }
  },
  {
    url: '/events/rif-voronezh-2014',
    now: {
      ru: '/forum/-674/',
    }
  },
  {
    url: '/blog/enb-bh-v100',
    now: {
      ru: '/forum/-675/',
    }
  },
  {
    url: '/events/codefest-novosibirsk-2015',
    now: {
      ru: '/forum/-676/',
    }
  },
  {
    url: '/blog/alfa-lab-seminar-2014',
    now: {
      ru: '/forum/-677/',
    }
  },
  {
    url: '/blog/first-bem-block',
    now: {
      ru: '/forum/-678/',
    }
  },
  {
    url: '/events/beminar-march-2015',
    now: {
      ru: '/forum/-679/',
    }
  },
  {
    url: [
      '/events/campjs2014',
      '/talks/campjs-melbourne-2014',
    ],
    now: {
      ru: '/forum/-680/',
    }
  },
  {
    url: '/blog/first-bem-forum',
    now: {
      ru: '/forum/-681/',
    }
  },
  {
    url: '/blog/doc-release-2',
    now: {
      ru: '/forum/-682/',
    }
  },
  {
    url: '/blog/digest-3',
    now: {
      ru: '/forum/-683/',
    }
  },
  {
    url: '/talks/gemini-odessajs-2014',
    now: {
      ru: '/forum/-684/',
    }
  },
  {
    url: '/talks/beminar-build-2015',
    now: {
      ru: '/forum/-685/',
    }
  },
  {
    url: '/talks/talksworks-spb-2015',
    now: {
      ru: '/forum/-686/',
    }
  },
  {
    url: '/talks/rif-voronezh-2014',
    now: {
      ru: '/forum/-687/',
    }
  },
  {
    url: '/talks/bem-odessajs-2015',
    now: {
      ru: '/forum/-688/',
    }
  },
  {
    url: '/blog/new-in-borschik-and-bem-tools',
    now: {
      ru: '/forum/-689/',
    }
  },
  {
    url: '/events/campjs-melbourne-2014',
    now: {
      ru: '/forum/-690/',
    }
  },
  {
    url: '/blog/bem-tools-0-6-4',
    now: {
      ru: '/forum/-691/',
    }
  },
  {
    url: '/talks/yglf-telaviv-2015',
    now: {
      ru: '/forum/-692/',
    }
  },
  {
    url: '/blog/first-bem-board',
    now: {
      ru: '/forum/-693/',
    }
  },
  {
    url: '/blog/bemup-minsk-2014',
    now: {
      ru: '/forum/-694/',
    }
  },
  {
    url: '/events/odessajs-odessa-2015',
    now: {
      ru: '/forum/-695/',
    }
  },
  {
    url: '/talks/beminar-js-2015',
    now: {
      ru: '/forum/-696/',
    }
  },
  {
    url: '/events/fronteers-amsterdam-2015',
    now: {
      ru: '/forum/-697/',
    }
  },
  {
    url: [
      '/events/bemup-2013',
      '/events/bemup/',
      '/blog/bemup/',
    ],
    now: {
      ru: '/forum/-698/',
    }
  },
  {
    url: '/blog/anygrid-bem-notations',
    now: {
      ru: '/forum/-699/',
    }
  },
  {
    url: '/blog/digest-2',
    now: {
      ru: '/forum/-700/',
    }
  },
  {
    url: '/events/bem-hackaton-2014',
    now: {
      ru: '/forum/-701/',
    }
  },
  {
    url: '/blog/beminfo-mobile',
    now: {
      ru: '/forum/-702/',
    }
  },
  {
    url: '/blog/first-bem-doc',
    now: {
      ru: '/forum/-703/',
    }
  },
  {
    url: '/talks/metarefresh-bangalore-2013',
    now: {
      ru: '/forum/-704/',
    }
  },
  {
    url: '/blog/bem-core-v280',
    now: {
      ru: '/forum/-705/',
    }
  },
  {
    url: '/blog/first-bem-hack',
    now: {
      ru: '/forum/-706/',
    }
  },
  {
    url: '/events/beminar-november-2015',
    now: {
      ru: '/forum/-707/',
    }
  },
  {
    url: '/blog/bem-as-bootstrap',
    now: {
      ru: '/forum/-708/',
    }
  },
  {
    url: '/blog/libs-distribution',
    now: {
      ru: '/forum/-709/',
    }
  },
  {
    url: '/blog/doc-release-1',
    now: {
      ru: '/forum/-710/',
    }
  },
  {
    url: '/blog/bem-tools-v010',
    now: {
      ru: '/forum/-711/',
    }
  },
  {
    url: '/talks/bemup-spb-2014',
    now: {
      ru: '/forum/-712/',
    }
  },
  {
    url: '/blog/bemup-talks',
    now: {
      ru: '/forum/-713/',
    }
  },
  {
    url: '/talks/yasubbotnik-msk-2015',
    now: {
      ru: '/forum/-714/',
    }
  },
  {
    url: '/blog/bem-competition-results',
    now: {
      ru: '/forum/-715/',
    }
  },
  {
    url: '/talks/loftschool-music-2015',
    now: {
      ru: '/forum/-716/',
    }
  },
  {
    url: '/events/beminar-july-2015',
    now: {
      ru: '/forum/-717/',
    }
  },
  {
    url: '/blog/enb-bemxjst-and-enb-xjst-v200',
    now: {
      ru: '/forum/-718/',
    }
  },
  {
    url: '/blog/new-beminfo-site',
    now: {
      ru: '/forum/-719/',
    }
  },
  {
    url: '/blog/bemup-promo',
    now: {
      ru: '/forum/-720/',
    }
  },
  {
    url: '/blog/bh-v4',
    now: {
      ru: '/forum/-721/',
    }
  },
  {
    url: '/blog/digest-1',
    now: {
      ru: '/forum/-722/',
    }
  },
  {
    url: '/talks/girls-not-bombs-minsk-2014',
    now: {
      ru: '/forum/-723/',
    }
  },
  {
    url: '/talks/webcamp-odessa-2015',
    now: {
      ru: '/forum/-724/',
    }
  },
  {
    url: '/blog/digest-6',
    now: {
      ru: '/forum/-725/',
    }
  },
  {
    url: '/blog/doc-update-1',
    now: {
      ru: '/forum/-726/',
    }
  },
  {
    url: '/blog/bem-feedback',
    now: {
      en: '/forum/-1/',
    }
  },
  {
    url: '/blog/bem-core-v3-plans',
    now: {
      en: '/forum/-2/',
    }
  },
  {
    url: '/blog/bem-tools-0-5-33',
    now: {
      en: '/forum/-3/',
    }
  },
  {
    url: '/events/yglf-telaviv-2015',
    now: {
      en: '/forum/-4/',
    }
  },
  {
    url: '/blog/bem-components-v2',
    now: {
      en: '/forum/-5/',
    }
  },
  {
    url: '/blog/first-bem-img',
    now: {
      en: '/forum/-6/',
    }
  },
  {
    url: '/blog/jsdoc-update',
    now: {
      en: '/forum/-7/',
    }
  },
  {
    url: [
      '/blog/2013-02-bem-goes-to-india',
      '/blog/bem-goes-to-india',
      '/events/2013-02-bem-goes-to-india',
      '/events/bem-goes-to-india',
      '/events/metarefresh-bangalore-2013',
    ],
    now: {
      en: '/forum/-8/',
    }
  },
  {
    url: '/blog/bem-cli',
    now: {
      en: '/forum/-9/',
    }
  },
  {
    url: '/blog/first-bem-blog',
    now: {
      en: '/forum/-10/',
    }
  },
  {
    url: '/blog/bem-tools-status-freeze',
    now: {
      en: '/forum/-11/',
    }
  },
  {
    url: '/blog/site-technologies',
    now: {
      en: '/forum/-12/',
    }
  },
  {
    url: '/blog/bem-components',
    now: {
      en: '/forum/-13/',
    }
  },
  {
    url: '/blog/first-bem-ide',
    now: {
      en: '/forum/-14/',
    }
  },
  {
    url: '/blog/first-bem-build',
    now: {
      en: '/forum/-15/',
    }
  },
  {
    url: '/talks/mercadolibre-argentina-2015',
    now: {
      en: '/forum/-16/',
    }
  },
  {
    url: '/talks/campjs-melbourne-2014',
    now: {
      en: '/forum/-17/',
    }
  },
  {
    url: '/blog/first-bem-forum',
    now: {
      en: '/forum/-18/',
    }
  },
  {
    url: '/blog/doc-release-2',
    now: {
      en: '/forum/-19/',
    }
  },
  {
    url: '/blog/new-in-borschik-and-bem-tools',
    now: {
      en: '/forum/-20/',
    }
  },
  {
    url: '/events/campjs-melbourne-2014',
    now: {
      en: '/forum/-21/',
    }
  },
  {
    url: '/blog/bem-tools-0-6-4',
    now: {
      en: '/forum/-22/',
    }
  },
  {
    url: '/talks/yglf-telaviv-2015',
    now: {
      en: '/forum/-23/',
    }
  },
  {
    url: '/events/fronteers-amsterdam-2015',
    now: {
      en: '/forum/-24/',
    }
  },
  {
    url: '/blog/anygrid-bem-notations',
    now: {
      en: '/forum/-25/',
    }
  },
  {
    url: '/blog/beminfo-mobile',
    now: {
      en: '/forum/-26/',
    }
  },
  {
    url: '/blog/first-bem-doc',
    now: {
      en: '/forum/-27/',
    }
  },
  {
    url: [
      '/blog/maintainable-frontend-dev-with-bem',
      '/blog/2013-02-maintainable-frontend-dev-with-bem',
      '/talks/maintainable-frontend-dev-with-bem',
      '/talks/2013-02-maintainable-frontend-dev-with-bem',
      '/talks/metarefresh-bangalore-2013',
    ],
    now: {
      en: '/forum/-28/',
    }
  },
  {
    url: '/blog/bem-core-v280',
    now: {
      en: '/forum/-29/',
    }
  },
  {
    url: '/blog/first-bem-hack',
    now: {
      en: '/forum/-30/',
    }
  },
  {
    url: '/blog/libs-distribution',
    now: {
      en: '/forum/-31/',
    }
  },
  {
    url: '/blog/bem-forum-en-launch',
    now: {
      en: '/forum/-32/',
    }
  },
  {
    url: '/blog/bem-tools-v010',
    now: {
      en: '/forum/-33/',
    }
  },
  {
    url: '/blog/bemup-talks',
    now: {
      en: '/forum/-34/',
    }
  },
  {
    url: '/blog/new-beminfo-site',
    now: {
      en: '/forum/-35/',
    }
  },
  {
    url: '/blog/bemup-promo',
    now: {
      en: '/forum/-36/',
    }
  },
  {
    url: '/blog/doc-update-1',
    now: {
      en: '/forum/-37/',
    }
  },
  {
    url: '/talks',
    now: {
      ru: '/forum/?labels=news,talks&sort=created&direction=desc',
      en: '/forum/?labels=news,talks&sort=created&direction=desc',
    }
  },
  {
    url: '/events',
    now: {
      ru: '/forum/?labels=news,events&sort=created&direction=desc',
      en: '/forum/?labels=news,events&sort=created&direction=desc',
    }
  },
  {
    url: [
      '/blog',
      '/news'
    ],
    now: {
      ru: '/forum/?labels=news&sort=created&direction=desc',
      en: '/forum/?labels=news&sort=created&direction=desc',
    }
  },

  // articles
  {
    url: '/articles/19-bem-principles',
    now: {
      ru: 'https://habrahabr.ru/company/yandex/blog/267875/',
    }
  },
  {
    url: '/articles/learning-to-love-bem',
    now: {
      ru: 'http://frontender.info/learning-to-love-bem/',
      en: 'http://mono.company/journal/frontend/learning-to-love-bem/'
    }
  },
  {
    url: '/articles/isomorphic-bem',
    now: {
      ru: 'https://habrahabr.ru/post/249653/',
    }
  },
  {
    url: '/articles/bem-for-small-projects',
    now: {
      ru: 'https://habrahabr.ru/company/yandex/blog/234905/',
      en: 'https://www.smashingmagazine.com/2014/07/bem-methodology-for-small-projects/'
    }
  },
  {
    url: [
      '/articles/yamapsbem',
      '/tutorials/yamapsbem',
    ],
    now: {
      ru: 'https://github.com/zloylos/ymapsbem/blob/master/README.ru.md',
      en: 'https://github.com/zloylos/ymapsbem/blob/master/README.md'
    }
  },
  {
    url: '/articles/bem-full-stack-site',
    now: {
      ru: 'https://habrahabr.ru/company/yandex/blog/251473/',
    }
  },
  {
    url: '/articles/mailru-unified-design',
    now: {
      ru: 'https://www.smashingmagazine.com/2015/02/product-design-unification-case-study-mobile-web-framework/',
      en: 'https://www.smashingmagazine.com/2015/02/product-design-unification-case-study-mobile-web-framework/'
    }
  },
  {
    url: [
      '/articles/bem-js-main-terms',
      '/libs/bem-core/1.0.0/i-bem.js/bem-js-main-terms/',
    ],
    now: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/bem-js-main-terms/bem-js-main-terms.ru.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/bem-js-main-terms/bem-js-main-terms.en.md'
    }
  },
  {
    url: '/articles/yandex-frontend-dev',
    now: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/yandex-frontend-dev/yandex-frontend-dev.ru.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/yandex-frontend-dev/yandex-frontend-dev.en.md'
    }
  },
  {
    url: [
      '/articles/article',
      '/articles/firm-card-story',
      '/tutorials/firm-card-story',
    ],
    now: {
      ru: 'https://github.com/dab/firmCardStory/blob/master/docs/firm-card-story/firm-card-story.ru.md',
      en: 'https://github.com/dab/firmCardStory/blob/master/docs/firm-card-story/firm-card-story.en.md'
    }
  },
  {
    url: '/articles/borschik',
    now: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/borschik/borschik.ru.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/borschik/borschik.en.md'
    }
  },
  {
    url: '/articles/smartcd',
    now: {
      ru: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/smartcd/smartcd.ru.md',
      en: 'https://github.com/bem/bem-method/blob/bem-info-data/articles/smartcd/smartcd.en.md'
    }
  },
  {
    url: '/articles/why-bem-in-a-nutshell',
    now: {
      en: 'https://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/'
    }
  },
  {
    url: '/articles/bemhtml-cache-experimental',
    now: {
      en: 'https://github.com/bem/bem-core/blob/v2/common.docs/bemhtml-cache-experimental/bemhtml-cache-experimental.en.md'
    }
  },
  {
    url: '/articles/side-effects-in-css',
    now: {
      en: 'http://philipwalton.com/articles/side-effects-in-css/'
    }
  },
  {
    url: '/articles',
    now: {
      ru: '/methodology/articles/',
      en: '/methodology/articles/',
    }
  },

  // tools
  // enb-bem-techs
  {
    url: [
    //'/tools/bem/enb-bem-techs/readme',
    //'/tools/bem/enb-bem-techs/bem-project',
      '/tools/bem/enb-bem-techs',
    ],
    now: {
      ru: '/toolbox/enb/enb-bem-techs/',
    }
  },
  // enb-js
  {
    url: [
    //'/tools/bem/enb-js/readme',
      '/tools/bem/enb-js',
    ],
    now: {
      ru: '/toolbox/enb/enb-js/',
    }
  },
  // enb-css
  {
    url: [
    //'/tools/bem/enb-css/readme',
      '/tools/bem/enb-css',
    ],
    now: {
      ru: '/toolbox/enb/enb-css/',
    }
  },
  // enb-stylus
  {
    url: [
    //'/tools/bem/enb-stylus/readme',
      '/tools/bem/enb-stylus',
    ],
    now: {
      ru: '/toolbox/enb/enb-stylus/',
    }
  },
  // enb-bemxjst
  {
    url: [
    //'/tools/bem/enb-bemxjst/readme',
      '/tools/bem/enb-bemxjst',
    ],
    now: {
      ru: '/toolbox/enb/enb-bemxjst/',
    }
  },
  // enb-bh
  {
    url: [
    //'/tools/bem/enb-bh/readme',
      '/tools/bem/enb-bh',
    ],
    now: {
      ru: '/toolbox/enb/enb-bh/',
    }
  },
  // enb-xjst
  {
    url: '/tools/bem/enb-xjst/readme',
    now: {
      ru: 'https://github.com/enb/enb-xjst/blob/master/README.md',
    }
  },
  {
    url: '/tools/bem/enb-xjst/api',
    now: {
      ru: 'https://github.com/enb/enb-xjst/blob/master/api.ru.md',
    }
  },
  {
    url: '/tools/bem/enb-xjst/changelog',
    now: {
      ru: 'https://github.com/enb/enb-xjst/blob/master/CHANGELOG.md',
    }
  },
  // enb-bem-i18n
  {
    url: [
    //'/tools/bem/enb-bem-i18n/readme',
      '/tools/bem/enb-bem-i18n',
    ],
    now: {
      ru: '/toolbox/enb/enb-bem-i18n/',
    }
  },
  // enb-borschik
  {
    url: [
    //'/tools/bem/enb-borschik/readme',
      '/tools/bem/enb-borschik',
    ],
    now: {
      ru: '/toolbox/enb/enb-borschik/',
    }
  },
  // enb-bem-specs
  {
    url: [
    //'/tools/bem/enb-bem-specs/readme',
      '/tools/bem/enb-bem-specs',
    ],
    now: {
      ru: '/toolbox/enb/enb-bem-specs/',
    }
  },
  // enb-bem-tmpl-specs
  {
    url: [
    //'/tools/bem/enb-bem-tmpl-specs/readme',
      '/tools/bem/enb-bem-tmpl-specs',
    ],
    now: {
      ru: '/toolbox/enb/enb-bem-tmpl-specs/',
    }
  },
  // enb-bem-examples
  {
    url: [
    //'/tools/bem/enb-bem-examples/readme',
      '/tools/bem/enb-bem-examples',
    ],
    now: {
      ru: '/toolbox/enb/enb-bem-examples/',
    }
  },
  // enb-bem-docs
  {
    url: [
    //'/tools/bem/enb-bem-docs/readme',
      '/tools/bem/enb-bem-docs',
    ],
    now: {
      ru: '/toolbox/enb/enb-bem-docs/',
    }
  },
  // enb-magic-platform
  {
    url: [
    //'/tools/bem/enb-magic-platform/readme',
      '/tools/bem/enb-magic-platform',
    ],
    now: {
      ru: '/toolbox/enb/enb-magic-platform/',
    }
  },
  // enb-magic-factory
  {
    url: [
    //'/tools/bem/enb-magic-factory/readme',
      '/tools/bem/enb-magic-factory',
    ],
    now: {
      ru: '/toolbox/enb/enb-magic-factory/',
    }
  },
  // bem-tools
  {
    url: [
      '/tools/bem/bem-tools/installation',
      '/tools/bem/installation',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/installation/installation.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/installation/installation.en.md'
    }
  },
  {
    url: [
      '/tools/bem/bem-tools/commands',
      '/tools/bem/commands',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/commands/commands.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/commands/commands.en.md'
    }
  },
  {
    url: [
      '/tools/bem/bem-tools/levels',
      '/tools/bem/levels',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/levels/levels.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/levels/levels.en.md'
    }
  },
  {
    url: [
      '/tools/bem/bem-tools/customization',
      '/tools/bem/customization',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/customization/customization.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/customization/customization.en.md'
    }
  },
  {
    url: [
      '/tools/bem/bem-tools/tech-modules',
      '/tools/bem/tech-modules',
      '/tools/tech-modules',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/tech-modules/tech-modules.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/tech-modules/tech-modules.en.md'
    }
  },
  {
    url: [
      '/tools/bem/bem-tools/api',
      '/tools/bem/api',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/api/api.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/api/api.en.md'
    }
  },
  {
    url: '/tools/bem/bem-tools/creating-subcommands',
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/creating-subcommands/creating-subcommands.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/creating-subcommands/creating-subcommands.en.md'
    }
  },
  {
    url: [
      '/tools/bem/bem-tools/contribute',
      '/tools/bem/contribute',
    ],
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/contribute/contribute.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/contribute/contribute.en.md'
    }
  },
  {
    url: '/tools/bem/bem-tools/changelog',
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/support/0.10.x/ChangeLog.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/support/0.10.x/ChangeLog.md'
    }
  },
  {
    url: '/tools/bem/bem-tools/autoprefixer',
    now: {
      ru: 'https://github.com/bem/bem-tools-autoprefixer/blob/master/README.ru.md',
      en: 'https://github.com/bem/bem-tools-autoprefixer/blob/master/README.md'
    }
  },
  {
    url: '/tools/bem/bem-tools',
    now: {
      ru: 'https://github.com/bem/bem-tools/blob/dev/docs/index/index.ru.md',
      en: 'https://github.com/bem/bem-tools/blob/dev/docs/index/index.en.md'
    }
  },
  // html-differ
  {
    url: '/tools/testing/html-differ',
    now: {
      ru: 'https://github.com/bem/html-differ/blob/master/README.ru.md',
      en: 'https://github.com/bem/html-differ/blob/master/README.md'
    }
  },
  // gemini
  {
    url: '/tools/testing/gemini',
    now: {
      ru: 'https://gemini-testing.github.io/gemini/',
      en: 'https://gemini-testing.github.io/gemini/',
    }
  },
  // borschik
  {
    url: [
      '/tools/optimizers/borschik/freeze',
      '/tools/borschik/freeze',
    ],
    now: {
      ru: 'https://github.com/borschik/borschik/blob/master/docs/freeze/freeze.ru.md',
      en: 'https://github.com/borschik/borschik/blob/master/docs/freeze/freeze.en.md'
    }
  },
  {
    url: [
      '/tools/optimizers/borschik/where-is-my-tech',
      '/tools/borschik/where-is-my-tech',
    ],
    now: {
      ru: 'https://github.com/borschik/borschik/blob/master/docs/where-is-my-tech/where-is-my-tech.ru.md',
      en: 'https://github.com/borschik/borschik/blob/master/docs/where-is-my-tech/where-is-my-tech.en.md'
    }
  },
  {
    url: [
      '/tools/optimizers/borschik/borschik-server',
      '/tools/borschik/borschik-server',
      '/tools/borschik-server',
    ],
    now: {
      ru: 'https://github.com/borschik/borschik/blob/master/docs/borschik-server/borschik-server.ru.md',
      en: 'https://github.com/borschik/borschik/blob/master/docs/borschik-server/borschik-server.en.md'
    }
  },
  {
    url: [
      '/tools/optimizers/borschik/js-include',
      '/tools/borschik/js-include',
    ],
    now: {
      ru: 'https://github.com/borschik/borschik/blob/master/docs/js-include/js-include.ru.md',
      en: 'https://github.com/borschik/borschik/blob/master/docs/js-include/js-include.en.md'
    }
  },
  {
    url: [
      '/tools/optimizers/borschik/changelog',
      '/tools/borschik/changelog',
    ],
    now: {
      ru: 'https://github.com/borschik/borschik/blob/master/CHANGELOG.ru.md',
      en: 'https://github.com/borschik/borschik/blob/master/CHANGELOG.md'
    }
  },
  {
    url: [
    //'/tools/optimizers/borschik/index',
      '/tools/optimizers/borschik',
      '/tools/borschik'
    ],
    now: {
      ru: 'https://github.com/borschik/borschik/blob/master/docs/index/index.ru.md',
      en: 'https://github.com/borschik/borschik/blob/master/docs/index/index.en.md'
    }
  },
  // csso
  {
    url: [
      '/tools/optimizers/csso',
      '/tools/csso',
    ],
    now: {
      ru: 'https://github.com/css/csso/',
      en: 'https://github.com/css/csso/',
    }
  },
  // svgo
  {
    url: [
      '/tools/optimizers/svgo',
      '/tools/svgo',
    ],
    now: {
      ru: 'https://github.com/svg/svgo/',
      en: 'https://github.com/svg/svgo/',
    }
  },
  // coa
  {
    url: '/tools/bem/coa',
    now: {
      ru: 'https://github.com/veged/coa/blob/master/README.ru.md',
      en: 'https://github.com/veged/coa/blob/master/README.md'
    }
  },
  // modules
  {
    url: '/tools/bem/modules',
    now: {
      ru: 'https://github.com/ymaps/modules/blob/master/README.ru.md',
      en: 'https://github.com/ymaps/modules/blob/master/README.md'
    }
  },
  // bower-npm-install
  {
    url: '/tools/bem/bower-npm-install',
    now: {
      ru: 'https://github.com/arikon/bower-npm-install/blob/master/README.ru.md',
      en: 'https://github.com/arikon/bower-npm-install/blob/master/README.md'
    }
  },
  // generator-bem-stub
  {
    url: [
      '/tools/bem/bem-stub',
      '/tools/bem/generator-bem-stub',
    ],
    now: {
      ru: 'https://github.com/bem/generator-bem-stub/blob/master/README.ru.md',
      en: 'https://github.com/bem/generator-bem-stub/blob/master/README.md'
    }
  },
  // bem-naming
  {
    url: '/tools/bem/bem-naming',
    now: {
      ru: '/toolbox/sdk/bem-naming/',
      en: '/toolbox/sdk/bem-naming/',
    }
  },

  // bemjson
  {
    url: [
      '/technology/bemhtml/current/bemjson',
      '/technology/bemhtml/2.3.0/bemjson',
      '/technology/bemhtml/2.5.0/bemjson',
      '/technology/bemhtml/v2/bemjson',
    //'/technology/bemjson/v2',
      '/technology/bemjson'
    ],
    now: {
      ru: '/platform/bemjson/',
      en: '/platform/bemjson/',
    }
  },

  // xjst & bemxjst
  {
    url: [
    //'/libs/bem-core/1.0.0/bemhtml/intro',
    //'/libs/bem-core/1.0.0/bemhtml/reference',
    //'/libs/bem-core/1.0.0/bemhtml/rationale',
    //'/libs/bem-core/1.0.0/bemhtml/templating',
    //'/libs/bem-core/1.0.0/bemhtml/bemhtml-js-syntax',
      '/libs/bem-core/1.0.0/bemhtml',

    //'/libs/bem-core/1.1.0/bemhtml/intro',
    //'/libs/bem-core/1.1.0/bemhtml/reference',
    //'/libs/bem-core/1.1.0/bemhtml/rationale',
    //'/libs/bem-core/1.1.0/bemhtml/templating',
    //'/libs/bem-core/1.1.0/bemhtml/bemhtml-js-syntax',
      '/libs/bem-core/1.1.0/bemhtml',

    //'/libs/bem-core/1.2.0/bemhtml/intro',
    //'/libs/bem-core/1.2.0/bemhtml/reference',
    //'/libs/bem-core/1.2.0/bemhtml/rationale',
    //'/libs/bem-core/1.2.0/bemhtml/templating',
    //'/libs/bem-core/1.2.0/bemhtml/bemhtml-js-syntax',
      '/libs/bem-core/1.2.0/bemhtml',

    //'/libs/bem-core/2.0.0/bemhtml/intro',
    //'/libs/bem-core/2.0.0/bemhtml/reference',
    //'/libs/bem-core/2.0.0/bemhtml/rationale',
    //'/libs/bem-core/2.0.0/bemhtml/templating',
    //'/libs/bem-core/2.0.0/bemhtml/bemhtml-js-syntax',
      '/libs/bem-core/2.0.0/bemhtml',

    //'/libs/bem-core/current/bemhtml/intro',
    //'/libs/bem-core/current/bemhtml/reference',
    //'/libs/bem-core/current/bemhtml/rationale',
    //'/libs/bem-core/current/bemhtml/templating',
    //'/libs/bem-core/current/bemhtml/bemhtml-js-syntax',
      '/libs/bem-core/current/bemhtml',

    //'/libs/bem-core/2.2.0/templating/intro',
    //'/libs/bem-core/2.2.0/templating/reference',
    //'/libs/bem-core/2.2.0/templating/rationale',
    //'/libs/bem-core/2.2.0/templating/templating',
    //'/libs/bem-core/2.2.0/templating/bemhtml-js-syntax',
      '/libs/bem-core/2.2.0/templating',

    //'/technology/bemhtml/current/intro',
    //'/technology/bemhtml/current/reference',
    //'/technology/bemhtml/current/rationale',
    //'/technology/bemhtml/current/templating',
    //'/technology/bemhtml/current/bemhtml-js-syntax',
    //'/technology/bemhtml/current',

    //'/technology/bemhtml/2.3.0/intro',
    //'/technology/bemhtml/2.3.0/reference',
    //'/technology/bemhtml/2.3.0/rationale',
    //'/technology/bemhtml/2.3.0/templating',
    //'/technology/bemhtml/2.3.0/bemhtml-js-syntax',
    //'/technology/bemhtml/2.3.0',

    //'/technology/bemhtml/2.5.0/intro',
    //'/technology/bemhtml/2.5.0/reference',
    //'/technology/bemhtml/2.5.0/rationale',
    //'/technology/bemhtml/2.5.0/templating',
    //'/technology/bemhtml/2.5.0/bemhtml-js-syntax',
    //'/technology/bemhtml/2.5.0',

    //'/technology/bemhtml/v2/intro',
    //'/technology/bemhtml/v2/reference',
    //'/technology/bemhtml/v2/rationale',
    //'/technology/bemhtml/v2/templating',
    //'/technology/bemhtml/v2/bemhtml-js-syntax',
    //'/technology/bemhtml/v2',
      '/technology/bemhtml',

    //'/articles/bemhtml-intro',
    //'/articles/bemhtml-reference',
    //'/articles/bemhtml-rationale',
      '/articles/bemhtml-',

    //'/technology/bemtree/current/bemtree',
    //'/technology/bemtree/current',
    //'/technology/bemtree/2.3.0/bemtree',
    //'/technology/bemtree/2.3.0',
    //'/technology/bemtree/2.5.0/bemtree',
    //'/technology/bemtree/2.5.0',
    //'/technology/bemtree/v2/bemtree',
    //'/technology/bemtree/v2',
      '/technology/bemtree',

    //'/tools/templating-engines/bemhtml',
    //'/tools/templating-engines/bemxjst',
    //'/tools/templating-engines/xjst',
      '/tools/templating-engines',

    //'/libs/bem-core/bemhtml-reference',
    //'/libs/bem-core/bemhtml-rationale',
      '/libs/bem-core/bemhtml-',
    ],
    now: {
      ru: '/platform/bem-xjst/',
      en: '/platform/bem-xjst/',
    }
  },

  // enb
  {
    url: '/tools/bem',
    now: {
      ru: '/toolbox/enb/',
      en: '/toolbox/enb/',
    }
  },
  {
    url: '/tools',
    now: {
      ru: '/toolbox/',
      en: '/toolbox/',
    }
  },

  // deps
  {
    url: [
    //'/tools/bem/bem-tools/deps-js-syntax',
    //'/tools/bem/bem-tools/depsjs',
      '/tools/bem/bem-tools/deps',
      '/tools/bem/depsjs',
      '/articles/deps-js-syntax',
    //'/technology/deps/about',
      '/technology/deps'
    ],
    now: {
      ru: '/platform/deps/',
      en: '/platform/deps/',
    }
  },

  // BH
  {
    url: '/technology/bh/v3/changelog',
    now: {
      ru: 'https://github.com/bem/bh/blob/v3.3.0/CHANGELOG.ru.md',
      en: 'https://github.com/bem/bh/blob/v3.3.0/CHANGELOG.md'
    }
  },
  {
    url: [
    //'/technology/bh/v3/reference',
    //'/technology/bh/v3/about',
      '/technology/bh/v3',
    ],
    now: {
      ru: 'https://github.com/bem/bh/blob/v3.3.0/README.ru.md',
      en: 'https://github.com/bem/bh/blob/v3.3.0/README.md'
    }
  },
  {
    url: '/technology/bh/v4/changelog',
    now: {
      ru: 'https://github.com/bem/bh/blob/v4.0.0/CHANGELOG.ru.md',
      en: 'https://github.com/bem/bh/blob/v4.0.0/CHANGELOG.md'
    }
  },
  {
    url: [
    //'/technology/bh/v4/reference',
    //'/technology/bh/v4/about',
      '/technology/bh/v4',
    ],
    now: {
      ru: 'https://github.com/bem/bh/blob/v4.0.0/README.ru.md',
      en: 'https://github.com/bem/bh/blob/v4.0.0/README.md'
    }
  },
  {
    url: '/technology/bh/v4.1.0/changelog',
    now: {
      ru: 'https://github.com/bem/bh/blob/v4.1.0/CHANGELOG.ru.md',
      en: 'https://github.com/bem/bh/blob/v4.1.0/CHANGELOG.md'
    }
  },
  {
    url: [
    //'/technology/bh/v4.1.0/reference',
    //'/technology/bh/v4.1.0/about',
      '/technology/bh/v4.1.0',
    ],
    now: {
      ru: 'https://github.com/bem/bh/blob/v4.1.0/README.ru.md',
      en: 'https://github.com/bem/bh/blob/v4.1.0/README.md'
    }
  },
  {
    url: '/technology/bh/v4.1.1/changelog',
    now: {
      ru: 'https://github.com/bem/bh/blob/v4.1.1/CHANGELOG.ru.md',
      en: 'https://github.com/bem/bh/blob/v4.1.1/CHANGELOG.md'
    }
  },
  {
    url: [
    //'/technology/bh/v4.1.1/reference',
    //'/technology/bh/v4.1.1/about',
      '/technology/bh/v4.1.1',
      '/technology/bh'
    ],
    now: {
      ru: 'https://github.com/bem/bh/blob/v4.1.1/README.ru.md',
      en: 'https://github.com/bem/bh/blob/v4.1.1/README.md'
    }
  },

  // i-bem
  {
    url: [
      '/technology/i-bem/current/i-bem-js-common',
      '/technology/i-bem/2.3.0/i-bem-js-common',
      '/technology/i-bem/2.5.0/i-bem-js-common',
      '/technology/i-bem/v2/i-bem-js-common',
    ],
    now: {
      ru: '/platform/i-bem/common/',
      en: '/platform/i-bem/common/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-html-binding',
      '/technology/i-bem/2.3.0/i-bem-html-binding',
      '/technology/i-bem/2.5.0/i-bem-html-binding',
      '/technology/i-bem/v2/i-bem-html-binding',
    ],
    now: {
      ru: '/platform/i-bem/html-binding/',
      en: '/platform/i-bem/html-binding/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-decl',
      '/technology/i-bem/2.3.0/i-bem-decl',
      '/technology/i-bem/2.5.0/i-bem-decl',
      '/technology/i-bem/v2/i-bem-decl',
    ],
    now: {
      ru: '/platform/i-bem/declaration/',
      en: '/platform/i-bem/declaration/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-params',
      '/technology/i-bem/2.3.0/i-bem-params',
      '/technology/i-bem/2.5.0/i-bem-params',
      '/technology/i-bem/v2/i-bem-params',
    ],
    now: {
      ru: '/platform/i-bem/parameters/',
      en: '/platform/i-bem/parameters/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-dom',
      '/technology/i-bem/2.3.0/i-bem-dom',
      '/technology/i-bem/2.5.0/i-bem-dom',
      '/technology/i-bem/v2/i-bem-dom',
    ],
    now: {
      ru: '/platform/i-bem/dom/',
      en: '/platform/i-bem/dom/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-mods',
      '/technology/i-bem/2.3.0/i-bem-mods',
      '/technology/i-bem/2.5.0/i-bem-mods',
      '/technology/i-bem/v2/i-bem-mods',
    ],
    now: {
      ru: '/platform/i-bem/states/',
      en: '/platform/i-bem/states/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-events',
      '/technology/i-bem/2.3.0/i-bem-events',
      '/technology/i-bem/2.5.0/i-bem-events',
      '/technology/i-bem/v2/i-bem-events',
    ],
    now: {
      ru: '/platform/i-bem/events/',
      en: '/platform/i-bem/events/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-init',
      '/technology/i-bem/2.3.0/i-bem-init',
      '/technology/i-bem/2.5.0/i-bem-init',
      '/technology/i-bem/v2/i-bem-init',
    ],
    now: {
      ru: '/platform/i-bem/init/',
      en: '/platform/i-bem/init/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-interaction',
      '/technology/i-bem/2.3.0/i-bem-interaction',
      '/technology/i-bem/2.5.0/i-bem-interaction',
      '/technology/i-bem/v2/i-bem-interaction',
    ],
    now: {
      ru: '/platform/i-bem/interaction/',
      en: '/platform/i-bem/interaction/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-context',
      '/technology/i-bem/2.3.0/i-bem-context',
      '/technology/i-bem/2.5.0/i-bem-context',
      '/technology/i-bem/v2/i-bem-context',
    ],
    now: {
      ru: '/platform/i-bem/context/',
      en: '/platform/i-bem/context/',
    }
  },
  {
    url: [
      '/technology/i-bem/current/i-bem-whats-next',
      '/technology/i-bem/2.3.0/i-bem-whats-next',
      '/technology/i-bem/2.5.0/i-bem-whats-next',
      '/technology/i-bem/v2/i-bem-context',
    ],
    now: {
      ru: '/platform/i-bem/extras/',
      en: '/platform/i-bem/extras/',
    }
  },
  {
    url: [
    //'/technology/i-bem/current/i-bem-js',
    //'/technology/i-bem/current',
    //'/technology/i-bem/2.3.0/i-bem-js',
    //'/technology/i-bem/2.3.0
    //'/technology/i-bem/2.5.0/i-bem-js',
    //'/technology/i-bem/2.5.0
    //'/technology/i-bem/v2/i-bem-js',
    //'/technology/i-bem/v2',
      '/technology/i-bem',
      '/libs/bem-core/i-bem-js',
      '/libs/bem-core/current/i-bem.js',
      '/libs/bem-core/1.0.0/i-bem.js',
      '/libs/bem-core/1.1.0/i-bem.js',
      '/libs/bem-core/1.2.0/i-bem.js',
      '/libs/bem-core/2.0.0/i-bem.js',
      '/libs/bem-core/2.2.0/i-bem.js',
    ],
    now: {
      ru: '/platform/i-bem/',
      en: '/platform/i-bem/',
    }
  },

  // technology
  {
    url: '/technology',
    now: {
      ru: '/platform/',
      en: '/platform/',
    }
  },

  // tutorials
  {
    url: '/tutorials/quick-start-static',
    now: {
      ru: '/platform/tutorials/quick-start-static/',
      en: '/platform/tutorials/quick-start-static/',
    }
  },
  {
    url: [
      '/tutorials/start-with-project-stub',
      '/articles/start-with-project-stub',
    ],
    now: {
      ru: '/platform/tutorials/start-with-project-stub/',
      en: '/platform/tutorials/start-with-project-stub/',
    }
  },
  {
    url: '/tutorials/bem-js-tutorial/01-block-structure',
    now: {
      ru: '/platform/tutorials/i-bem/block/',
      en: '/platform/tutorials/i-bem/block/',
    }
  },
  {
    url: '/tutorials/bem-js-tutorial/02-modifiers',
    now: {
      ru: '/platform/tutorials/i-bem/modifiers/',
      en: '/platform/tutorials/i-bem/modifiers/',
    }
  },
  {
    url: '/tutorials/bem-js-tutorial/03-live-initialization',
    now: {
      ru: '/platform/tutorials/i-bem/live-init/',
      en: '/platform/tutorials/i-bem/live-init/',
    }
  },
  {
    url: '/tutorials/bem-js-tutorial',
    now: {
      ru: '/platform/tutorials/i-bem/',
      en: '/platform/tutorials/i-bem/',
    }
  },
  {
    url: '/tutorials/project-stub',
    now: {
      ru: '/platform/project-stub/',
      en: '/platform/project-stub/',
    }
  },
  {
    url: '/tutorials',
    now: {
      ru: '/platform/tutorials/',
      en: '/platform/tutorials/',
    }
  },

  // libs
  {
    url: '/libs/bem-core/changelog',
    now: {
      ru: '/libs/bem-core/current/changelog/',
      en: '/libs/bem-core/current/changelog/',
    }
  },
  {
    url: '/libs/bem-core/migration',
    now: {
      ru: '/libs/bem-core/current/migration/',
      en: '/libs/bem-core/current/migration/',
    }
  },
  {
    url: [
    //'/libs/bem-core/1.0.0/bem-core',
      '/libs/bem-core/1.0.0',
      '/libs/bem-core/1.1.0',
      '/libs/bem-core/1.2.0',
      '/libs/bem-core/2.0.0',
      '/libs/bem-core/2.2.0',
    ],
    now: {
      ru: '/libs/bem-core/current/',
      en: '/libs/bem-core/current/',
    }
  },
  {
    url: '/libs/bem-components/dev-docs',
    now: {
      ru: '/libs/bem-components/current/',
      en: '/libs/bem-components/current/',
    }
  },
  {
    url: '/libs/bem-history/v2',
    now: {
      ru: '/libs/bem-history/v3',
      en: '/libs/bem-history/v3',
    }
  },

  // misc
  {
    url: [
      '/pages/acknowledgement',
      '/acknowledgement'
    ],
    now: {
      ru: '/',
      en: '/',
    }
  },
];
