const versioned = require('../lib/model-versioned');
const lib = require('../lib/model-lib');

const methodology = [
  {
    url: '/methodology/',
    site: '/methodology/',
    title: {
      ru: 'Методология',
      en: 'Methodology'
    },
    tags: ['methodology'],
    type: 'promo',
    bundle: 'methodology-index'
  },
  {
    url: '/methodology/quick-start/',
    site: '/methodology/',
    subtitle: {
      ru: 'Необходимый минимум для знакомства с БЭМ',
      en: 'Start quick, finish slow',
    },
    title: {
      ru: 'Быстрый старт',
      en: 'Quick start'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology',
    prev: false
  },
  {
    url: '/methodology/key-concepts/',
    site: '/methodology/',
    subtitle: {
      ru: 'Что есть что в мире БЭМ',
      en: 'Concepts and other stuff'
    },
    title: {
      ru: 'Основные понятия',
      en: 'Key concepts'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/naming-convention/',
    site: '/methodology/',
    subtitle: {
      ru: 'Как вложить смысл в имена',
      en: 'Concepts of BEM naming'
    },
    title: {
      ru: 'Соглашение по именованию',
      en: 'Naming convention',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/css/',
    site: '/methodology/',
    title: 'CSS',
    subtitle: {
      ru: 'Верстка независимыми блоками',
      en: 'How to write CSS for a BEM project',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-css/bem-for-css.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-css/bem-for-css.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/html/',
    site: '/methodology/',
    title: 'HTML',
    subtitle: {
      ru: 'Разметка в БЭМ-терминах',
      en: 'How to write HTML for a BEM project',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/js/',
    site: '/methodology/',
    subtitle: {
      ru: 'Декларативно, в БЭМ-терминах',
      en: 'Client and Server'
    },
    title: {
      ru: 'JavaScript',
      en: 'JavaScript',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/filestructure/',
    site: '/methodology/',
    subtitle: {
      ru: 'Единые правила организации кода',
      en: 'The structure defines'
    },
    title: {
      ru: 'Файловая структура',
      en: 'File structure',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/redefinition-levels/',
    site: '/methodology/',
    subtitle: {
      ru: 'Расширение возможностей блоков',
      en: 'The structure defines'
    },
    title: {
      ru: 'Уровни переопределения',
      en: 'Redefinition level',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/redefinition-levels/redefinition-levels.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/redefinition-levels/redefinition-levels.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/block-modification/',
    site: '/methodology/',
    subtitle: {
      ru: 'Множественное наследование, сделанное правильно',
      en: 'Multiple inheritance done right'
    },
    title: {
      ru: 'Модификация блока',
      en: 'Block modification',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/block-modification/block-modification.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/block-modification/block-modification.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/build/',
    site: '/methodology/',
    subtitle: {
      ru: 'Оптимальный runtime',
      en: 'Build and Break'
    },
    title: {
      ru: 'Сборка',
      en: 'Build',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/build/build.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/build/build.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/declarations/',
    site: '/methodology/',
    subtitle: {
      ru: 'Абстракция над разметкой',
      en: 'Declare and Implement'
    },
    title: {
      ru: 'Декларации',
      en: 'Declarations',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/declarations/declarations.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/declarations/declarations.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/solved-problems/',
    site: '/methodology/',
    subtitle: {
      ru: '',
      en: 'Not all, but many'
    },
    title: {
      ru: 'Какие проблемы решает',
      en: 'Solved problems',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/history/',
    site: '/methodology/',
    subtitle: {
      ru: 'Путь проб и ошибок',
      en: 'The history of formation'
    },
    title: {
      ru: 'История создания',
      en: 'History',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/history/history.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/history/history.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology'
  },
  {
    url: '/methodology/articles/',
    site: '/methodology/',
    subtitle: {
      ru: '',
      en: 'showing press badge'
    },
    title: {
      ru: 'Статьи',
      en: 'Articles',
    },
    source: {
      ru: './content/methodology/articles.ru.js',
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
    subtitle: {
      ru: 'Возможно, мы уже ответили на твой вопрос',
      en: 'All your questions answered'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.en.md',
    },
    tags: ['methodology'],
    bundle: 'methodology',
    next: false
  }
];

const toolbox = [
  {
    url: '/toolbox/',
    site: '/toolbox/',
    title: {
      ru: 'Инструментарий',
      en: 'Toolbox',
    },
    type: 'promo',
    bundle: 'toolbox-index'
  },
  {
    url: '/toolbox/enb/',
    site: '/toolbox/enb/',
    title: 'ENB',
    description: {
      ru: 'ENB — сборщик проектов, построенных по методологии БЭМ',
      en: 'ENB — a tool for building web projects based on BEM methodology'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb/enb-overview/enb-overview.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb/enb-overview/enb-overview.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox',
    prev: false
  },
  {
    url: '/toolbox/enb/api/',
    site: '/toolbox/enb/',
    title: {
      ru: 'API',
      en: 'API'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/api/api.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/api/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/techs/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Технологии для работы с файлами',
      en: 'Technologies for working with files'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/techs/techs.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/techs/techs.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/cli/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Использование из командной строки',
      en: 'Using the command line'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/cli/cli.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/cli/cli.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/terms/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Терминология',
      en: 'Terminology'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/terms/terms.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/terms/terms.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/build-project/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Как собрать проект',
      en: 'How to build a project'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/guides/build-project/build-project.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/guides/build-project/build-project.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/write-tech/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Как написать технологию',
      en: 'How to write a technology'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/guides/write-tech/write-tech.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/guides/write-tech/write-tech.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/express/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Автоматизация с помощью express',
      en: 'Automation with express'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/guides/express/express.ru.md',
      en: 'https://github.com/enb/enb/blob/master/docs/guides/express/express.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Пакеты ENB',
      en: 'ENB packages'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb/enb-packages-index/enb-packages-index.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb/enb-packages-index/enb-packages-index.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bem-techs',
    description: {
      ru: 'Пакет для сборки проектов, в основе которых лежит методология БЭМ',
      en: 'The main technology package for working with projects created with the BEM methodology',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/README.ru.md',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/README.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-bundle/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Сборка бандла',
      en: 'Build bundle',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-bundle/build-bundle.ru.md',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-bundle/build-bundle.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-page/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Сборка страницы',
      en: 'Build page',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-page/build-page.ru.md',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-page/build-page.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-merged-bundle/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Сборка merged-бандла',
      en: 'Build merged bundle',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-merged-bundle/build-merged-bundle.ru.md',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-merged-bundle/build-merged-bundle.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-dist/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Сборка дистрибутива',
      en: 'Build distribution',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-dist/build-dist.ru.md',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-dist/build-dist.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/api/api.ru.md',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/api/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/migration-2/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Миграция на 2.0',
      en: 'Migration to 2.0',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/MIGRATION-2.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/migration-1/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Миграция на 1.0',
      en: 'Migration to 1.0',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/MIGRATION-1.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-js/',
    site: '/toolbox/enb/packages/',
    title: 'enb-js',
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-js/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/api.ru.md',
       en: 'https://github.com/enb/enb-js/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-js/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-modules/',
    site: '/toolbox/enb/packages/',
    title: 'enb-modules',
    source: {
      ru: 'https://github.com/enb/enb-modules/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-modules/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-modules/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/',
    site: '/toolbox/enb/packages/',
    title: 'enb-css',
    description: {
      ru: 'Поддержка CSS для ENB',
      en: 'CSS support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/ie/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Сборка бандла для IE',
      en: 'Build bundle for IE',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/docs/ie.ru.md',
      en: 'https://github.com/enb/enb-css/blob/master/docs/ie.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/docs/api.ru.md',
      en: 'https://github.com/enb/enb-css/blob/master/docs/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-stylus/',
    site: '/toolbox/enb/packages/',
    title: 'enb-stylus',
    description: {
      ru: 'Поддержка Stylus для ENB',
      en: 'Stylus support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-stylus/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/api.ru.md',
      en: 'https://github.com/enb/enb-stylus/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-stylus/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bemxjst/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bemxjst',
    description: {
      ru: 'Поддержка bem-xjst для ENB',
      en: 'bem-xjst support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bemxjst/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/api.ru.md',
      en: 'https://github.com/enb/enb-bemxjst/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bemxjst/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bh',
    description: {
      ru: 'Поддержка BH для ENB',
      en: 'BH support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/api.ru.md',
      en: 'https://github.com/enb/enb-bh/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/migration-1/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Миграция на 1.0',
      en: 'Migration to 1.0',
    },
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/MIGRATION-1.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-i18n/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bem-i18n',
    description: {
      ru: 'Поддержка i18n для ENB',
      en: 'I18n support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-i18n/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/api.ru.md',
      en: 'https://github.com/enb/enb-bem-i18n/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-i18n/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-borschik/',
    site: '/toolbox/enb/packages/',
    title: 'enb-borschik',
    description: {
      ru: 'Поддержка borschik для ENB',
      en: 'borschik support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/README.md',
      // en: '',
    },
    tags: ['enb', 'borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-borschik/api/',
    site: '/toolbox/enb/packages/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/api.ru.md',
      // en: '',
    },
    tags: ['enb', 'borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-borschik/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb', 'borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-specs/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bem-specs',
    description: {
      ru: 'Поддержка bem-specs для ENB',
      en: 'bem-specs support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-specs/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-specs/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-specs/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-tmpl-specs/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bem-tmpl-specs',
    description: {
      ru: 'Поддержка bem-tmpl-specs для ENB',
      en: 'bem-tmpl-specs support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-tmpl-specs/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-tmpl-specs/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-tmpl-specs/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-examples/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bem-examples',
    description: {
      ru: 'Поддержка bem-examples для ENB',
      en: 'bem-examples support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-examples/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-examples/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-examples/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-docs/',
    site: '/toolbox/enb/packages/',
    title: 'enb-bem-docs',
    description: {
      ru: 'Поддержка bem-docs для ENB',
      en: 'bem-docs support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-docs/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-docs/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-docs/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-platform/',
    site: '/toolbox/enb/packages/',
    title: 'enb-magic-platform',
    description: {
      ru: 'Поддержка magic-platform для ENB',
      en: 'magic-platform support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-platform/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-platform/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-platform/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-factory/',
    site: '/toolbox/enb/packages/',
    title: 'enb-magic-factory',
    description: {
      ru: 'Поддержка magic-factory для ENB',
      en: 'magic-factory support for ENB',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-factory/blob/master/README.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-factory/changelog/',
    site: '/toolbox/enb/packages/',
    title: {
      ru: 'Изменения',
      en: 'Changelog',
    },
    source: {
      ru: 'https://github.com/enb/enb-magic-factory/blob/master/CHANGELOG.md',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/',
    site: '/toolbox/bemhint/',
    title: 'bemhint',
    source: {
      ru: 'https://github.com/bemhint/bemhint/blob/master/README.ru.md',
      en: 'https://github.com/bemhint/bemhint/blob/master/README.md',
    },
    tags: ['bemhint'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/css-naming/',
    site: '/toolbox/bemhint/',
    title: {
      ru: 'CSS именование',
      en: 'CSS naming',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-css-naming/blob/master/README.ru.md', // TODO
      en: 'https://github.com/bemhint/bemhint-css-naming/blob/master/README.md',
    },
    tags: ['bemhint'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/fs-naming/',
    site: '/toolbox/bemhint/',
    title: {
      ru: 'Именование файлов',
      en: 'File naming',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-fs-naming/blob/master/README.ru.md',
      en: 'https://github.com/bemhint/bemhint-fs-naming/blob/master/README.md',
    },
    tags: ['bemhint'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/deps-schema/',
    site: '/toolbox/bemhint/',
    title: {
      ru: 'DEPS схема',
      en: 'DEPS schema',
    },
    source: {
      ru: 'https://github.com/bemhint/bemhint-deps-schema/blob/master/README.ru.md',
      en: 'https://github.com/bemhint/bemhint-deps-schema/blob/master/README.md',
    },
    tags: ['bemhint', 'deps'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemhint/deps-specification/',
    site: '/toolbox/bemhint/',
    title: {
      ru: 'DEPS спецификация',
      en: 'DEPS specification',
    },
    source: {
      // ru: 'https://github.com/bemhint/bemhint-deps-specification/blob/master/README.ru.md', // TODO
      en: 'https://github.com/bemhint/bemhint-deps-specification/blob/master/README.md',
    },
    tags: ['bemhint', 'deps'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bem-tools/',
    site: '/toolbox/',
    title: 'bem-tools',
    source: {
      // ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/bem-tools/bem-tools.ru.md', // TODO
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/bem-tools/bem-tools.en.md',
    },
    tags: ['bem-tools'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bemmet/',
    site: '/toolbox/',
    title: 'bemmet',
    source: {
      // ru: 'https://github.com/tadatuta/bemmet/blob/master/README.ru.md', // TODO
      en: 'https://github.com/tadatuta/bemmet/blob/master/README.md',
    },
    tags: ['bemmet'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/',
    site: '/toolbox/sdk/',
    title: 'SDK',
    source: {
      ru: 'https://github.com/bem/bem-sdk/blob/master/README.ru.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/README.md',
    },
    tags: ['bem-sdk'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-walk/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.walk',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/walk/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/walk/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.walk'],
    bundle: 'toolbox',
    next: false
  },
  {
    url: '/toolbox/sdk/bem-config/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.config',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/config/README.ru.md', // TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/config/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.config'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-entity/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.naming.entity ',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.entity/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.entity/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.naming.entity '],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-cell-stringify/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.naming.cell.stringify ',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.stringify/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.stringify/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.naming.cell.stringify '],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-cell-pattern-parser/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.naming.cell.pattern-parser',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.pattern-parser/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.pattern-parser/README.md',
    },
    tags: ['bem-sdk', 'bem-naming-cell-pattern-parser'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-file-stringify/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.naming.file.stringify',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.file.stringify/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.file.stringify/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.naming.file.stringify'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-decl/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.decl ',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/decl/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/decl/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.decl '],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bemjson-to-decl/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.bemjson-to-decl',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-decl/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-decl/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bemjson-to-decl'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bemjson-to-jsx/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.bemjson-to-jsx',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-jsx/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-jsx/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bemjson-to-jsx'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-import-notation/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.import-notation',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/import-notation/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/import-notation/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.import-notation'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-graph/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.graph',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/graph/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/graph/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.graph'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-deps/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.deps',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/deps/README.ru.md', // TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/deps/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.deps'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-entity-name/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.entity-name',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/entity-name/README.ru.md', // TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/entity-name/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.entity-name'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-file/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.file',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/file/README.ru.md', // TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/file/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.file'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-cell/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.cell',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/cell/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/cell/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.cell'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bundle/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.bundle',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bundle/README.ru.md', // TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bundle/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bundle'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bemjson-node/',
    site: '/toolbox/sdk/',
    title: '@bem/sdk.bemjson-node',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-node/README.ru.md', //TODO
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-node/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bemjson-node'],
    bundle: 'toolbox'
  },
];

const technologiesClassicBemxjst = versioned(
  {
    url: '/technologies/classic/bem-xjst/',
    site: '/technologies/classic/',
    title: {
        ru: 'Шаблоны (BEMHTML, BEMTREE)',
        en: 'Templates (BEMHTML, BEMTREE)',
    },
    tags: ['bem-xjst'],
    bundle: 'technologies',
    library: 'bem-xjst',
    type: 'versioned'
  },
  [
    {
      url: '',
      // title: version-will-be-here
      source: {
          ru: '1-about.md',
          en: '1-about.md',
      },
      prev: '/technologies/classic/bemjson/'
    },
    {
      url: 'quick-start/',
      title: {
        ru: 'Быстрый старт',
        en: 'Quick start',
      },
      source: {
          ru: '2-quick-start.md',
          en: '2-quick-start.md',
      }
    },
    {
      url: 'api/',
      title: 'API',
      source: {
          ru: '3-api.md',
          en: '3-api.md',
      }
    },
    {
      url: 'templates-syntax/',
      title: {
        ru: 'Синтаксис шаблонов',
        en: 'Templates syntax',
      },
      source: {
          ru: '5-templates-syntax.md',
          en: '5-templates-syntax.md',
      }
    },
    {
      url: 'templates-context/',
      title: {
        ru: 'Контекст',
        en: 'Context',
      },
      source: {
        ru: '6-templates-context.md',
        en: '6-templates-context.md',
      }
    },
    {
      url: 'runtime/',
      title: 'Runtime',
      source: {
        ru: '7-runtime.md',
        en: '7-runtime.md',
      },
      next: '/technologies/classic/i-bem/'
    }
  ],
  [
    { number: '7', text: '7.x', path: 'v7.x' },
    { number: '8', text: '8.x', path: 'master' },
  ],
  '8'
);

const technologies = [
  {
    url: '/technologies/',
    site: '/technologies/',
    title: {
      ru: 'Технологии',
      en: 'Technology'
    },
    tags: ['technologies'],
    type: 'promo',
    bundle: 'technologies-index'
  },
  {
    url: '/technologies/classic/',
    site: '/technologies/classic/',
    title: {
      ru: 'Классический БЭМ-стек',
      en: 'Classical BEM stack'
    },
    tags: ['technologies', 'classic'],
    type: 'promo',
    bundle: 'technologies-classic-index',
    prev: false
  },
  {
    url: '/technologies/classic/bemjson/',
    site: '/technologies/classic/',
    title: {
      ru: 'Данные (BEMJSON)',
      en: 'Data (BEMJSON)'
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/master/docs/ru/4-data.md',
      en: 'https://github.com/bem/bem-xjst/blob/master/docs/en/4-data.md',
    },
    tags: ['bemjson'],
    bundle: 'technologies'
  }
].concat(
  technologiesClassicBemxjst
).concat([
    {
      url: '/technologies/classic/i-bem/',
      site: '/technologies/classic/',
      title: {
        ru: 'Клиентский JavaScript (i-bem.js)',
        en: 'Client-side JavaScript (i-bem.js)',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/overview/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Общие сведения',
        en: 'Overview',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-common.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-common.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/html-binding/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Привязка JS-блоков к HTML',
        en: 'Binding JS blocks to HTML',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-html-binding.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-html-binding.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/declaration/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Декларация блока',
        en: 'Block declaration',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-decl.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-decl.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/parameters/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Передача параметров',
        en: 'Passing parameters',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-params.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-params.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/dom/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Работа с DOM-деревом',
        en: 'Working with the DOM tree',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-dom.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-dom.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/states/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Состояния блока',
        en: 'States of a block',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-states.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-states.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/collections/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Коллекции',
        en: 'Collections',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-collections.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-collections.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/events/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'События',
        en: 'Events',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-events.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-events.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/init/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Инициализация',
        en: 'Initialization',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-init.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-init.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/interaction/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Взаимодействие блоков',
        en: 'Interaction of blocks',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-interact.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-interact.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/context/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Контекст',
        en: 'Context',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-context.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-context.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/i-bem/extras/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Что дальше?',
        en: 'What next?',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-extras.ru.md',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-extras.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/deps/',
      site: '/technologies/classic/',
      title: {
        ru: 'Зависимости',
        en: 'Dependencies'
      },
      description: {
        ru: 'Технология для описания зависимостей',
        en: 'Technology for declaring dependencies',
      },
      source: {
        ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/depsjs.ru.md',
        en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/depsjs.en.md',
      },
      tags: ['deps'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/deps-spec/',
      site: '/technologies/classic/',
      title: {
        ru: 'Спецификация DEPS',
        en: 'DEPS specification'
      },
      source: {
        ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/specification.ru.md',
        en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/specification.en.md',
      },
      tags: ['deps'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/classic/project-stub/',
      site: '/technologies/classic/',
      title: {
        ru: 'Заготовка проекта',
        en: 'Project stub',
      },
      source: {
        ru: 'https://github.com/bem/project-stub/blob/master/README.ru.md',
        en: 'https://github.com/bem/project-stub/blob/master/README.md',
      },
      tags: ['project-stub'],
      bundle: 'technologies'
    }
  ])
  .concat([
    // {
    //   url: '/technologies/bem-react/',
    //   site: '/technologies/bem-react/',
    //   subtitle: {
    //     ru: 'Узнайте как совместить БЭМ и React',
    //     en: 'TBD',
    //   },
    //   title: {
    //     ru: 'БЭМ и React',
    //     en: 'TBD'
    //   },
    //   source: {
    //     ru: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.ru.md',
    //     en: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.en.md',
    //   },
    //   tags: ['technologies', 'react'],
    //   bundle: 'technologies',
    //   prev: false
    // }

    {
      url: '/technologies/bem-react/',
      site: '/technologies/bem-react/',
      subtitle: {
        ru: 'Нейминг, модификаторы и переопределения',
        en: 'Naming, modifiers and redefinitions in React',
      },
      title: {
        ru: 'bem-react',
        en: 'bem-react',
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/docs/ru/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/docs/en/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'technologies',
      prev: false
    },
    {
      url: '/technologies/bem-react/motivation/',
      site: '/technologies/bem-react/',
      title: {
        ru: 'Зачем БЭМ, если есть React?',
        en: 'Why BEM?',
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/docs/ru/Introduction/Motivation.md',
        // en: 'https://github.com/bem/bem-react-core/blob/v3/docs/en/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/bem-react/classname/',
      site: '/technologies/bem-react/',
      title: {
        ru: 'classname',
        en: 'classname',
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/packages/classname/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/packages/classname/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/bem-react/core/',
      site: '/technologies/bem-react/',
      title: {
        ru: 'core',
        en: 'core',
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/packages/core/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/packages/core/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'technologies'
    },
    {
      url: '/technologies/bem-react/di/',
      site: '/technologies/bem-react/',
      title: {
        ru: 'di',
        en: 'di',
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/packages/di/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/packages/di/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'technologies'
    }
  ]);

const libsClassic = [
  {
    url: '/libraries/classic/',
    site: '/libraries/classic/',
    title: {
      ru: 'Классические БЭМ-библиотеки',
      en: 'Classic BEM libraries',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/libs/index.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/libs/index.en.md',
    },
    tags: ['libs', 'classic', 'bem-core', 'bem-components'],
    bundle: 'libraries'
  }].concat(
  lib({
    url: '/libraries/classic/bem-core/',
    site: '/libraries/classic/bem-core/',
    title: 'bem-core',
    library: 'bem-core',
    versions: [
      'node_modules/bem.info-data/bem-core-2.9.0',
      'node_modules/bem.info-data/bem-core-3.0.1',
      'node_modules/bem.info-data/bem-core-3.1.0',
      'node_modules/bem.info-data/bem-core-3.2.0',
      'node_modules/bem.info-data/bem-core-4.0.0',
      'node_modules/bem.info-data/bem-core-4.1.0',
      'node_modules/bem.info-data/bem-core-4.1.1',
      'node_modules/bem.info-data/bem-core-4.2.0',
      'node_modules/bem.info-data/bem-core-4.2.1',
    ],
    current: '4.2.0',
    tags: ['libs', 'bem-core'],
    bundle: 'libraries',
    type: 'lib'
  }),
  lib({
    url: '/libraries/classic/bem-components/',
    site: '/libraries/classic/bem-components/',
    title: 'bem-components',
    library: 'bem-components',
    versions: [
      'node_modules/bem.info-data/bem-components-3.1.3',
      'node_modules/bem.info-data/bem-components-4.0.0',
      'node_modules/bem.info-data/bem-components-5.0.0',
      'node_modules/bem.info-data/bem-components-5.1.0',
      'node_modules/bem.info-data/bem-components-6.0.0',
    ],
    current: '6.0.0',
    tags: ['libs', 'bem-components'],
    bundle: 'libraries',
    type: 'lib'
  }),
  lib({
    url: '/libraries/classic/bem-history/',
    site: '/libraries/classic/bem-history/',
    title: 'bem-history',
    library: 'bem-history',
    versions: [
      'node_modules/bem.info-data/bem-history-3.0.0',
      'node_modules/bem.info-data/bem-history-3.1.0',
      'node_modules/bem.info-data/bem-history-3.2.0',
      'node_modules/bem.info-data/bem-history-4.0.0',
    ],
    current: '4.0.0',
    tags: ['libs'],
    bundle: 'libraries',
    type: 'lib'
  })).concat([
  {
    url: '/libraries/classic/principles/',
    site: '/libraries/classic/',
    title: {
      ru: 'Принципы разработки БЭМ-библиотек',
      en: 'Principles of BEM library development',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/guides/libs-dev-principles/libs-dev-principles.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/guides/libs-dev-principles/libs-dev-principles.en.md',
    },
    tags: ['libs'],
    bundle: 'libraries'
  }
]);

const libsReact = [
  // {
  //   url: '/libraries/react/',
  //   site: '/libraries/react/',
  //   subtitle: {
  //     ru: 'I am React',
  //     en: 'TBD',
  //   },
  //   title: {
  //     ru: 'БЭМ и React',
  //     en: 'TBD'
  //   },
  //   source: {
  //     ru: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.ru.md',
  //     en: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.en.md',
  //   },
  //   tags: ['libraries', 'react', 'bem-react-core'],
  //   bundle: 'technologies',
  //   prev: false
  // }
].concat(
  // lib({
  //   url: '/libraries/react/bem-react-core/',
  //   site: '/libraries/react/bem-react-core/',
  //   title: 'bem-react-core',
  //   library: 'bem-react-core',
  //   versions: [
  //     'node_modules/bem.info-data/bem-core-2.9.0', // TODO: fix path
  //     'node_modules/bem.info-data/bem-core-3.0.1', // TODO: fix path
  //   ],
  //   current: '3.0.1', // TODO: fix version
  //   tags: ['libs', 'bem-react-core'],
  //   bundle: 'technologies',
  //   type: 'lib'
  // })
);

const tutorialsClassic = [
  {
    url: '/tutorials/classic/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Классический БЭМ-стек',
      en: 'Classical BEM stack',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.en.md',
    },
    tags: ['tutorials', 'classic'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/quick-start-static/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Собираем статическую страницу',
      en: 'Creating a static page',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/quick-start-static/quick-start-static.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/quick-start-static/quick-start-static.en.md',
    },
    tags: ['tutorials', 'classic', 'project-stub'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/start-with-project-stub/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Создаём статический БЭМ-проект',
      en: 'Starting a static BEM project',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub.en.md',
    },
    tags: ['tutorials', 'classic', 'project-stub'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/start-with-bem-express/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Создаём динамический БЭМ-проект',
      en: 'Starting a dynamic BEM project',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-bem-express/start-with-bem-express.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-bem-express/start-with-bem-express.en.md',
    },
    tags: ['tutorials', 'classic', 'bem-express'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/i-bem/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Справочное руководство i-bem.js',
      en: 'i-bem.js tutorial',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/00-Intro/00-Intro.ru.md',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/00-Intro/00-Intro.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/i-bem/block/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Описание структуры блока',
      en: 'Block structure',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/01-Block-structure/01-Block-structure.ru.md',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/01-Block-structure/01-Block-structure.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/i-bem/modifiers/',
    site: '/tutorials/classic/',
    description: {
      ru: 'Про модификацию блока',
      en: 'Про модификацию блока'
    },
    title: {
      ru: 'Модификаторы блока',
      en: 'Modifiers',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/02-Modifiers/02-Modifiers.ru.md',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/02-Modifiers/02-Modifiers.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'tutorials'
  },
  {
    url: '/tutorials/classic/i-bem/live-init/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Живая (ленивая) инициализация',
      en: 'Live (lazy) initialization',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/03-Live-initialization/03-Live-initialization.ru.md',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/03-Live-initialization/03-Live-initialization.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'tutorials',
    next: false
  },
  {
    url: '/tutorials/classic/dist-quick-start/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Dist bem-components: подключаем блоки на страницу',
      en: 'Dist bem-components: adding blocks to a page',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/dist-quick-start/dist-quick-start.ru.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/dist-quick-start/dist-quick-start.en.md',
    },
    tags: ['tutorials', 'classic', 'bem-components'],
    bundle: 'tutorials'
  }
];

const tutorialsReact = [
  // {
  //   url: '/tutorials/react/',
  //   site: '/tutorials/',
  //   subtitle: {
  //     ru: 'оаоао',
  //     en: 'TBD',
  //   },
  //   title: {
  //     ru: 'БЭМ и React',
  //     en: 'TBD'
  //   },
  //   source: {
  //     ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.ru.md',
  //     en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.en.md',
  //   },
  //   tags: ['tutorials', 'react'],
  //   bundle: 'technologies',
  //   prev: false
  // }
];

const libs = [
  {
    url: '/libraries/',
    site: '/libraries/',
    title: {
      ru: 'Библиотеки',
      en: 'Libraries'
    },
    tags: ['libs'],
    type: 'promo',
    bundle: 'libraries-index'
  }
]
  .concat(libsClassic)
  .concat(libsReact);

const tutorials = [
  {
    url: '/tutorials/',
    site: '/tutorials/',
    title: {
      ru: 'Учебные материалы',
      en: 'Tutorials'
    },
    tags: ['tutorials'],
    type: 'promo',
    bundle: 'tutorials-index'
  }
] .concat(tutorialsClassic)
  .concat(tutorialsReact)

const community = [
/*
  {
    url: '/community/',
    site: '/community/',
    title: {
      ru: 'Сообщество',
      en: 'Community',
    },
    type: 'promo',
    bundle: 'community-index',
    nav: false
  },
  {
    url: '/blog/',
    site: '/community/',
    title: {
      ru: 'Блог',
      en: 'Blog',
    },
    source: {
      ru: '',
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
      en: 'Events',
    },
    source: {
      ru: '',
      en: '',
    },
    level: 1,
    nav: false
  },
*/
];

module.exports = [
  {
    url: '/',
    site: '/',
    title: {
      ru: 'БЭМ',
      en: 'BEM',
    },
    type: 'promo',
    bundle: 'index'
  }
]
.concat(methodology)
.concat(toolbox)
.concat(technologies)
.concat(libs)
.concat(tutorials)
.concat(community)
.concat({
  url: '/forum/',
  site: '/community/',
  title: {
    ru: 'Форум',
    en: 'Forum',
  },
  source: { ru: '', en: '' },
  level: 1,
  nav: false
});
