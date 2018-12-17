const versioned = require('../lib/model-versioned');
const lib = require('../lib/model-lib');

const methodology = [
  {
    url: '/methodology/',
    site: '/methodology/',
    title: {
      ru: 'Методология',
      uk: 'Методологія',
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
      uk: 'Start quick, finish slow'
    },
    title: {
      ru: 'Быстрый старт',
      uk: 'Швидкий старт',
      en: 'Quick start'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.uk.md',
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
      uk: 'Concepts and other stuff',
      en: 'Concepts and other stuff'
    },
    title: {
      ru: 'Основные понятия',
      uk: 'Основні поняття',
      en: 'Key concepts'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.uk.md',
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
      uk: 'Concepts of BEM naming',
      en: 'Concepts of BEM naming'
    },
    title: {
      ru: 'Соглашение по именованию',
      uk: 'Угода щодо іменування',
      en: 'Naming convention',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.uk.md',
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
      uk: 'How to write CSS for a BEM project',
      en: 'How to write CSS for a BEM project',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-css/bem-for-css.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-css/bem-for-js.uk.md',
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
      uk: 'How to write HTML for a BEM project',
      en: 'How to write HTML for a BEM project',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-css/bem-for-js.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/js/',
    site: '/methodology/',
    subtitle: {
      ru: 'Декларативно, в БЭМ-терминах',
      uk: 'Client and Server',
      en: 'Client and Server'
    },
    title: {
      ru: 'JavaScript',
      uk: 'JavaScript',
      en: 'JavaScript',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-js/bem-for-js.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/filestructure/',
    site: '/methodology/',
    subtitle: {
      ru: 'Единые правила организации кода',
      uk: 'The structure defines',
      en: 'The structure defines'
    },
    title: {
      ru: 'Файловая структура',
      uk: 'Файлова структура',
      en: 'File structure',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/redefinition-levels/',
    site: '/methodology/',
    subtitle: {
      ru: 'Расширение возможностей блоков',
      uk: 'The structure defines',
      en: 'The structure defines'
    },
    title: {
      ru: 'Уровни переопределения',
      uk: 'Рівень перевизначення',
      en: 'Redefinition level',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/redefinition-levels/redefinition-levels.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/redefinition-levels/redefinition-levels.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/redefinition-levels/redefinition-levels.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/block-modification/',
    site: '/methodology/',
    subtitle: {
      ru: 'Множественное наследование, сделанное правильно',
      uk: 'Multiple inheritance done right',
      en: 'Multiple inheritance done right'
    },
    title: {
      ru: 'Модификация блока',
      uk: 'Модифікація блоку',
      en: 'Block modification',
    },
    tags: ['methodology'],
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/block-modification/block-modification.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/block-modification/block-modification.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/block-modification/block-modification.en.md',
    },
    bundle: 'methodology'
  },
  {
    url: '/methodology/build/',
    site: '/methodology/',
    subtitle: {
      ru: 'Оптимальный runtime',
      uk: 'Build and Break',
      en: 'Build and Break'
    },
    title: {
      ru: 'Сборка',
      uk: 'Збірка',
      en: 'Build',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/build/build.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/build/build.uk.md',
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
      uk: 'Declare and Implement',
      en: 'Declare and Implement'
    },
    title: {
      ru: 'Декларации',
      uk: 'Декларації',
      en: 'Declarations',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/declarations/declarations.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/declarations/declarations.uk.md',
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
      uk: 'Not all, but many',
      en: 'Not all, but many'
    },
    title: {
      ru: 'Какие проблемы решает',
      uk: 'Які проблеми вирішує',
      en: 'Solved problems',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.uk.md',
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
      uk: 'The history of formation',
      en: 'The history of formation'
    },
    title: {
      ru: 'История создания',
      uk: 'Історія створення',
      en: 'History',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/history/history.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/method/history/history.uk.md',
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
      uk: 'showing press badge',
      en: 'showing press badge'
    },
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
    subtitle: {
      ru: 'Возможно, мы уже ответили на твой вопрос',
      uk: 'All your questions answered',
      en: 'All your questions answered'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.uk.md',
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
      uk: 'Інструментарій',
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
      // uk: 'ENB — сборщик проектов, построенных по методологии БЭМ', // TODO
      en: 'ENB — a tool for building web projects based on BEM methodology'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb/enb-overview/enb-overview.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb-overview.ru.md', // TODO
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
      uk: 'API',
      en: 'API'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/api/api.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'Technologies for working with files'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/techs/techs.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'Using the command line'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/cli/cli.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'Terminology'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/terms/terms.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'How to build a project'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/guides/build-project/build-project.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'How to write a technology'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/guides/write-tech/write-tech.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'Automation with express'
    },
    source: {
      ru: 'https://github.com/enb/enb/blob/master/docs/guides/express/express.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb/blob/master/docs/guides/express/express.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/',
    site: '/toolbox/enb/',
    title: {
      ru: 'Пакеты ENB',
      // uk: '',
      en: 'ENB packages'
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/enb/enb-packages-index/enb-packages-index.ru.md',
      // uk: '',
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
      // uk: '',
      en: 'The main technology package for working with projects created with the BEM methodology',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/README.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/README.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-bundle/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
    title: {
      ru: 'Сборка бандла',
      uk: 'Збірка бандла',
      en: 'Build bundle',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-bundle/build-bundle.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-bundle/build-bundle.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-page/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
    title: {
      ru: 'Сборка страницы',
      uk: 'Збірка сторінки',
      en: 'Build page',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-page/build-page.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-page/build-page.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-merged-bundle/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
    title: {
      ru: 'Сборка merged-бандла',
      uk: 'Збірка merged-бандла',
      en: 'Build merged bundle',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-merged-bundle/build-merged-bundle.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-merged-bundle/build-merged-bundle.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/build-dist/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
    title: {
      ru: 'Сборка дистрибутива',
      uk: 'Збірка дистрибутиву',
      en: 'Build distribution',
    },
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-dist/build-dist.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/build-dist/build-dist.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/api/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bem-techs/blob/master/docs/api/api.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-techs/blob/master/docs/api/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/changelog/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/migration-2/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-techs/migration-1/',
    site: '/toolbox/enb/packages/enb-bem-techs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-js/',
    site: '/toolbox/enb/packages/enb-js/',
    title: 'enb-js',
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-js/api/',
    site: '/toolbox/enb/packages/enb-js/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-js/blob/master/api.ru.md',
      // uk: '',
       en: 'https://github.com/enb/enb-js/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-js/changelog/',
    site: '/toolbox/enb/packages/enb-js/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-modules/',
    site: '/toolbox/enb/packages/enb-modules/',
    title: 'enb-modules',
    source: {
      ru: 'https://github.com/enb/enb-modules/blob/master/README.md',
      // uk: '',
      // en: '',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-modules/changelog/',
    site: '/toolbox/enb/packages/enb-modules/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/',
    site: '/toolbox/enb/packages/enb-css/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/ie/',
    site: '/toolbox/enb/packages/enb-css/',
    title: {
      ru: 'Сборка бандла для IE',
      uk: 'Збірка бандла для IE',
      en: 'Build bundle for IE',
    },
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/docs/ie.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-css/blob/master/docs/ie.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/api/',
    site: '/toolbox/enb/packages/enb-css/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-css/blob/master/docs/api.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-css/blob/master/docs/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-css/changelog/',
    site: '/toolbox/enb/packages/enb-css/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-stylus/',
    site: '/toolbox/enb/packages/enb-stylus/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-stylus/api/',
    site: '/toolbox/enb/packages/enb-stylus/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-stylus/blob/master/api.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-stylus/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-stylus/changelog/',
    site: '/toolbox/enb/packages/enb-stylus/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bemxjst/',
    site: '/toolbox/enb/packages/enb-bemxjst/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bemxjst/api/',
    site: '/toolbox/enb/packages/enb-bemxjst/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bemxjst/blob/master/api.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bemxjst/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bemxjst/changelog/',
    site: '/toolbox/enb/packages/enb-bemxjst/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/',
    site: '/toolbox/enb/packages/enb-bh/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/api/',
    site: '/toolbox/enb/packages/enb-bh/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bh/blob/master/api.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bh/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/changelog/',
    site: '/toolbox/enb/packages/enb-bh/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bh/migration-1/',
    site: '/toolbox/enb/packages/enb-bh/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-i18n/',
    site: '/toolbox/enb/packages/enb-bem-i18n/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-i18n/api/',
    site: '/toolbox/enb/packages/enb-bem-i18n/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-bem-i18n/blob/master/api.ru.md',
      // uk: '',
      en: 'https://github.com/enb/enb-bem-i18n/blob/master/api.en.md',
    },
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-i18n/changelog/',
    site: '/toolbox/enb/packages/enb-bem-i18n/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-borschik/',
    site: '/toolbox/enb/packages/enb-borschik/',
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
    tags: ['enb', 'borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-borschik/api/',
    site: '/toolbox/enb/packages/enb-borschik/',
    title: 'API',
    source: {
      ru: 'https://github.com/enb/enb-borschik/blob/master/api.ru.md',
      // uk: '',
      // en: '',
    },
    tags: ['enb', 'borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-borschik/changelog/',
    site: '/toolbox/enb/packages/enb-borschik/',
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
    tags: ['enb', 'borschik'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-specs/',
    site: '/toolbox/enb/packages/enb-bem-specs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-specs/changelog/',
    site: '/toolbox/enb/packages/enb-bem-specs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-tmpl-specs/',
    site: '/toolbox/enb/packages/enb-bem-tmpl-specs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-tmpl-specs/changelog/',
    site: '/toolbox/enb/packages/enb-bem-tmpl-specs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-examples/',
    site: '/toolbox/enb/packages/enb-bem-examples/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-examples/changelog/',
    site: '/toolbox/enb/packages/enb-bem-examples/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-docs/',
    site: '/toolbox/enb/packages/enb-bem-docs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-bem-docs/changelog/',
    site: '/toolbox/enb/packages/enb-bem-docs/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-platform/',
    site: '/toolbox/enb/packages/enb-magic-platform/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-platform/changelog/',
    site: '/toolbox/enb/packages/enb-magic-platform/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-factory/',
    site: '/toolbox/enb/packages/enb-magic-factory/',
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
    tags: ['enb'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/enb/packages/enb-magic-factory/changelog/',
    site: '/toolbox/enb/packages/enb-magic-factory/',
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
    tags: ['enb'],
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
    tags: ['bemhint'],
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
    tags: ['bemhint'],
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
    tags: ['bemhint'],
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
    tags: ['bemhint', 'deps'],
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
    tags: ['bemhint', 'deps'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/bem-tools/',
    site: '/toolbox/bem-tools/',
    title: 'bem-tools',
    source: {
      // ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/bem-tools/bem-tools.ru.md', // TODO
      // uk: '',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/tools/bem-tools/bem-tools.en.md',
    },
    tags: ['bem-tools'],
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
    tags: ['bemmet'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/',
    site: '/toolbox/sdk/',
    title: 'SDK',
    source: {
      ru: 'https://github.com/bem/bem-sdk/blob/master/README.ru.md',
      // uk: 'https://github.com/bem/bem-sdk/blob/master/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/README.md',
    },
    tags: ['bem-sdk'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-walk/',
    site: '/toolbox/sdk/bem-walk/',
    title: '@bem/sdk.walk',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/walk/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/walk/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/walk/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.walk'],
    bundle: 'toolbox',
    next: false
  },
  {
    url: '/toolbox/sdk/bem-config/',
    site: '/toolbox/sdk/bem-config/',
    title: '@bem/sdk.config',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/config/README.ru.md', // TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/config/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/config/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.config'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-entity/',
    site: '/toolbox/sdk/bem-naming-entity/',
    title: '@bem/sdk.naming.entity ',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.entity/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.entity/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.entity/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.naming.entity '],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-cell-stringify/',
    site: '/toolbox/sdk/bem-naming-cell-stringify/',
    title: '@bem/sdk.naming.cell.stringify ',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.stringify/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.stringify/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.stringify/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.naming.cell.stringify '],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-naming-file-stringify/',
    site: '/toolbox/sdk/bem-naming-file-stringify/',
    title: '@bem/sdk.naming.file.stringify',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.file.stringify/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.file.stringify/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.file.stringify/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.naming.file.stringify'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-decl/',
    site: '/toolbox/sdk/bem-decl/',
    title: '@bem/sdk.decl ',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/decl/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/decl/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/decl/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.decl '],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bemjson-to-decl/',
    site: '/toolbox/sdk/bem-bemjson-to-decl/',
    title: '@bem/sdk.bemjson-to-decl',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-decl/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-decl/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-decl/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bemjson-to-decl'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bemjson-to-jsx/',
    site: '/toolbox/sdk/bem-bemjson-to-jsx/',
    title: '@bem/sdk.bemjson-to-jsx',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-jsx/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-jsx/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-to-jsx/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bemjson-to-jsx'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-import-notation/',
    site: '/toolbox/sdk/bem-import-notation/',
    title: '@bem/sdk.import-notation',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/import-notation/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/import-notation/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/import-notation/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.import-notation'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-graph/',
    site: '/toolbox/sdk/bem-graph/',
    title: '@bem/sdk.graph',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/graph/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/graph/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/graph/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.graph'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-deps/',
    site: '/toolbox/sdk/bem-deps/',
    title: '@bem/sdk.deps',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/deps/README.ru.md', // TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/deps/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/deps/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.deps'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-entity-name/',
    site: '/toolbox/sdk/bem-entity-name/',
    title: '@bem/sdk.entity-name',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/entity-name/README.ru.md', // TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/entity-name/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/entity-name/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.entity-name'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-file/',
    site: '/toolbox/sdk/bem-file/',
    title: '@bem/sdk.file',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/file/README.ru.md', // TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/file/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/file/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.file'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-cell/',
    site: '/toolbox/sdk/bem-cell/',
    title: '@bem/sdk.cell',
    source: {
      //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/cell/README.ru.md', //TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/cell/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/cell/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.cell'],
    bundle: 'toolbox'
  },
  {
    url: '/toolbox/sdk/bem-bundle/',
    site: '/toolbox/sdk/bem-bundle/',
    title: '@bem/sdk.bundle',
    source: {
      // ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bundle/README.ru.md', // TODO
      // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/bundle/README.uk.md',
      en: 'https://github.com/bem/bem-sdk/blob/master/packages/bundle/README.md',
    },
    tags: ['bem-sdk', '@bem/sdk.bundle'],
    bundle: 'toolbox'
  },
  // {
  //   url: '/toolbox/sdk/bem-bemjson-node/',
  //   site: '/toolbox/sdk/bem-bemjson-node/',
  //   title: 'bem-bemjson-node',
  //   source: {
  //     //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-node/README.ru.md', //TODO
  //     // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-node/README.uk.md',
  //     en: 'https://github.com/bem/bem-sdk/blob/master/packages/bemjson-node/README.md',
  //   },
  //   tags: ['bem-sdk', 'bem-bemjson-node'],
  //   bundle: 'toolbox'
  // },
  // {
  //   url: '/toolbox/sdk/bem-naming-cell-pattern-parser/',
  //   site: '/toolbox/sdk/bem-naming-cell-pattern-parser/',
  //   title: 'bem-naming-cell-pattern-parser',
  //   source: {
  //     //ru: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.pattern-parser/README.ru.md', //TODO
  //     // uk: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.pattern-parser/README.uk.md',
  //     en: 'https://github.com/bem/bem-sdk/blob/master/packages/naming.cell.pattern-parser/README.md',
  //   },
  //   tags: ['bem-sdk', 'bem-naming-cell-pattern-parser'],
  //   bundle: 'toolbox'
  // }
];

const technologiesClassicBemxjst = versioned(
  {
    url: '/technologies/classic/bem-xjst/',
    site: '/technologies/classic/bem-xjst/',
    title: {
        ru: 'Шаблоны (BEMHTML, BEMTREE)',
        uk: 'Шаблони (BEMHTML, BEMTREE)',
        en: 'Templates (BEMHTML, BEMTREE)',
    },
    tags: ['bem-xjst'],
    bundle: 'platform',
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
        uk: 'Швидкий старт',
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
        uk: 'Синтаксис шаблонів',
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
        uk: 'Контекст',
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
    { number: '6', text: '6.x', path: 'v6.x' },
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
      uk: 'Технологія',
      en: 'Technology'
    },
    tags: ['technologies'],
    type: 'promo',
    bundle: 'platform-index' // TODO: check me!
  },
  // {
  //   url: '/technologies/classic/',
  //   site: '/technologies/classic/',
  //   subtitle: {
  //     ru: 'Subtitle',
  //     en: 'Subtitle',
  //     uk: 'Subtitle'
  //   },
  //   title: {
  //     ru: 'Классический БЭМ-стек',
  //     uk: 'TBD',
  //     en: 'TBD'
  //   },
  //   source: {
  //     ru: 'https://github.com/bem-site/bem-method/blob/technologies/classic/classic.ru.md',
  //     // uk: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/classic/classic.uk.md',
  //     en: 'https://github.com/bem-site/bem-method/blob/technologies/classic/classic.en.md',
  //   },
  //   tags: ['technologies', 'classic', 'i-bem'],
  //   bundle: 'platform',
  //   prev: false
  // },
  {
    url: '/technologies/classic/bemjson/',
    site: '/technologies/classic/',
    title: {
      ru: 'Данные (BEMJSON)',
      uk: 'Дані (BEMJSON)',
      en: 'Data (BEMJSON)'
    },
    source: {
      ru: 'https://github.com/bem/bem-xjst/blob/master/docs/ru/4-data.md',
      // uk: '',
      en: 'https://github.com/bem/bem-xjst/blob/master/docs/en/4-data.md',
    },
    tags: ['bemjson'],
    bundle: 'platform'
  }
].concat(
  technologiesClassicBemxjst
).concat([
    {
      url: '/technologies/classic/i-bem/',
      site: '/technologies/classic/',
      title: {
        ru: 'Клиентский JavaScript (i-bem.js)',
        uk: 'Клієнтський JavaScript (i-bem.js)',
        en: 'Client-side JavaScript (i-bem.js)',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/overview/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Общие сведения',
        uk: 'Загальні відомості',
        en: 'Overview',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-common.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-common.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/html-binding/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Привязка JS-блоков к HTML',
        uk: 'Прив\'язка JS-блоків до HTML',
        en: 'Binding JS blocks to HTML',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-html-binding.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-html-binding.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/declaration/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Декларация блока',
        uk: 'Декларація блоку',
        en: 'Block declaration',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-decl.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-decl.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/parameters/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Передача параметров',
        uk: 'Передача параметрів',
        en: 'Passing parameters',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-params.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-params.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/dom/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Работа с DOM-деревом',
        uk: 'Робота з DOM-деревом',
        en: 'Working with the DOM tree',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-dom.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-dom.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/states/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Состояния блока',
        uk: 'Стани блоку',
        en: 'States of a block',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-states.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-states.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/collections/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Коллекции',
        uk: 'Колекції',
        en: 'Collections',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-collections.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-collections.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/events/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'События',
        uk: 'Події',
        en: 'Events',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-events.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-events.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/init/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Инициализация',
        uk: 'Ініціалізація',
        en: 'Initialization',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-init.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-init.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/interaction/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Взаимодействие блоков',
        uk: 'Взаємодія блоків',
        en: 'Interaction of blocks',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-interact.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-interact.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/context/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Контекст',
        uk: 'Контекст',
        en: 'Context',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-context.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-context.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/i-bem/extras/',
      site: '/technologies/classic/i-bem/',
      title: {
        ru: 'Что дальше?',
        uk: 'Що далі?',
        en: 'What next?',
      },
      source: {
        ru: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-extras.ru.md',
        // uk: '',
        en: 'https://github.com/bem/bem-core/blob/v4/common.docs/i-bem-js/i-bem-js-extras.en.md',
      },
      tags: ['i-bem.js'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/deps/',
      site: '/technologies/classic/',
      title: {
        ru: 'Зависимости',
        uk: 'Залежності',
        en: 'Dependencies'
      },
      description: {
        ru: 'Технология для описания зависимостей',
        // uk: '',
        en: 'Technology for declaring dependencies',
      },
      source: {
        ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/depsjs.ru.md',
        // uk: '',
        en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/depsjs.en.md',
      },
      tags: ['deps'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/deps-spec/',
      site: '/technologies/classic/',
      title: {
        ru: 'Спецификация DEPS',
        uk: 'Специфікація DEPS',
        en: 'DEPS specification'
      },
      source: {
        ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/specification.ru.md',
        // uk: '',
        en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/depsjs/specification.en.md',
      },
      tags: ['deps'],
      bundle: 'platform'
    },
    {
      url: '/technologies/classic/project-stub/',
      site: '/technologies/classic/',
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
      tags: ['project-stub'],
      bundle: 'platform'
    }
  ])
  .concat([
    // {
    //   url: '/technologies/react/',
    //   site: '/technologies/react/',
    //   subtitle: {
    //     ru: 'Узнайте как совместить БЭМ и React',
    //     en: 'TBD',
    //     uk: 'TBD'
    //   },
    //   title: {
    //     ru: 'БЭМ и React',
    //     uk: 'TBD',
    //     en: 'TBD'
    //   },
    //   source: {
    //     ru: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.ru.md',
    //     // uk: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.uk.md',
    //     en: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.en.md',
    //   },
    //   tags: ['technologies', 'react'],
    //   bundle: 'platform',
    //   prev: false
    // }

    {
      url: '/technologies/react/',
      site: '/technologies/react/',
      subtitle: {
        ru: 'Нейминг, модификаторы и переопределения',
        en: 'Naming, modifiers and redefinitions in React',
        uk: 'Naming, modifiers and redefinitions in React'
      },
      title: {
        ru: 'bem-react',
        en: 'bem-react',
        uk: 'bem-react'
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/docs/ru/README.md',
        // uk: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.uk.md',
        en: 'https://github.com/bem/bem-react/blob/master/docs/en/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'platform',
      prev: false
    },
    {
      url: '/technologies/react/motivation/',
      site: '/technologies/react/motivation/',
      title: {
        ru: 'Зачем БЭМ, если есть React?',
        en: 'Why BEM?',
        uk: 'Why BEM?'
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/docs/ru/Introduction/Motivation.md',
        // uk: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.uk.md',
        // en: 'https://github.com/bem/bem-react-core/blob/v3/docs/en/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'platform'
    },
    {
      url: '/technologies/react/bem-react/classname',
      site: '/technologies/react/bem-react/classname',
      title: {
        ru: 'classname',
        en: 'classname',
        uk: 'classname'
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/packages/classname/README.md',
        uk: 'https://github.com/bem/bem-react/blob/master/packages/classname/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/packages/classname/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'platform'
    },
    {
      url: '/technologies/react/bem-react/core',
      site: '/technologies/react/bem-react/core',
      title: {
        ru: 'core',
        en: 'core',
        uk: 'core'
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/packages/core/README.md',
        uk: 'https://github.com/bem/bem-react/blob/master/packages/core/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/packages/core/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'platform'
    },
    {
      url: '/technologies/react/bem-react/di',
      site: '/technologies/react/bem-react/di',
      title: {
        ru: 'di',
        en: 'di',
        uk: 'di'
      },
      source: {
        ru: 'https://github.com/bem/bem-react/blob/master/packages/di/README.md',
        uk: 'https://github.com/bem/bem-react/blob/master/packages/di/README.md',
        en: 'https://github.com/bem/bem-react/blob/master/packages/di/README.md',
      },
      tags: ['technologies', 'react'],
      bundle: 'platform'
    }
  ]);

const libsClassic = [
  {
    url: '/libraries/classic/',
    site: '/libraries/classic/',
    title: {
      ru: 'Классический БЭМ-стек',
      uk: 'Бібліотеки',
      en: 'Libraries',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/libs/index.ru.md',
      uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/libs/index.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/libs/index.en.md',
    },
    tags: ['libs', 'classic', 'bem-core', 'bem-components'],
    bundle: 'platform'
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
    bundle: 'platform',
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
    bundle: 'platform',
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
    bundle: 'platform',
    type: 'lib'
  })).concat([
  {
    url: '/libraries/classic/principles/',
    site: '/libraries/classic/principles/',
    title: {
      ru: 'Принципы разработки БЭМ-библиотек',
      uk: 'Принципи розробки БЕМ-бібліотек',
      en: 'Principles of BEM library development',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/guides/libs-dev-principles/libs-dev-principles.ru.md',
      // uk: 'https://github.com/bem-site/bem-method/blob/bem-info-data/guides/libs-dev-principles/libs-dev-principles.uk.md',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/guides/libs-dev-principles/libs-dev-principles.en.md',
    },
    tags: ['libs'],
    bundle: 'platform'
  }
]);

const libsReact = [
  // {
  //   url: '/libraries/react/',
  //   site: '/libraries/react/',
  //   subtitle: {
  //     ru: 'I am React',
  //     en: 'TBD',
  //     uk: 'TBD'
  //   },
  //   title: {
  //     ru: 'БЭМ и React',
  //     uk: 'TBD',
  //     en: 'TBD'
  //   },
  //   source: {
  //     ru: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.ru.md',
  //     // uk: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.uk.md',
  //     en: 'https://github.com/bem-site/bem-method/blob/migrateFromPlatformToTechnologies/technologies/react/react.en.md',
  //   },
  //   tags: ['libraries', 'react', 'bem-react-core'],
  //   bundle: 'platform',
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
  //   bundle: 'platform',
  //   type: 'lib'
  // })
);

const tutorialsClassic = [
  {
    url: '/tutorials/classic/',
    site: '/tutorials/',
    title: {
      ru: 'Классический БЭМ-стек',
      uk: 'Навчальні матеріали',
      en: 'Classical BEM stack',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.en.md',
    },
    tags: ['tutorials', 'classic'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/quick-start-static/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Собираем статическую страницу',
      uk: 'Збираємо статичну сторінку',
      en: 'Creating a static page',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/quick-start-static/quick-start-static.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/quick-start-static/quick-start-static.en.md',
    },
    tags: ['tutorials', 'classic', 'project-stub'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/start-with-project-stub/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Создаём статический БЭМ-проект',
      uk: 'Створюємо статичний БЕМ-проект',
      en: 'Starting a static BEM project',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub.en.md',
    },
    tags: ['tutorials', 'classic', 'project-stub'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/start-with-bem-express/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Создаём динамический БЭМ-проект',
      uk: 'Створюємо динамічний БЕМ-проект',
      en: 'Starting a dynamic BEM project',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-bem-express/start-with-bem-express.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-bem-express/start-with-bem-express.en.md',
    },
    tags: ['tutorials', 'classic', 'bem-express'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/i-bem/',
    site: '/tutorials/classic/i-bem/',
    title: {
      ru: 'Справочное руководство i-bem.js',
      uk: 'Довідкове керівництво i-bem.js',
      en: 'i-bem.js tutorial',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/00-Intro/00-Intro.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/00-Intro/00-Intro.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/i-bem/block/',
    site: '/tutorials/classic/i-bem/',
    title: {
      ru: 'Описание структуры блока',
      uk: 'Опис структури блоку',
      en: 'Block structure',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/01-Block-structure/01-Block-structure.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/01-Block-structure/01-Block-structure.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/i-bem/modifiers/',
    site: '/tutorials/classic/i-bem/',
    description: {
      ru: 'Про модификацию блока',
      uk: 'Про модификацию блока',
      en: 'Про модификацию блока'
    },
    title: {
      ru: 'Модификаторы блока',
      uk: 'Модифікатори блоку',
      en: 'Modifiers',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/02-Modifiers/02-Modifiers.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/02-Modifiers/02-Modifiers.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'platform'
  },
  {
    url: '/tutorials/classic/i-bem/live-init/',
    site: '/tutorials/classic/i-bem/',
    title: {
      ru: 'Живая (ленивая) инициализация',
      uk: 'Жива (лінива) ініціалізація',
      en: 'Live (lazy) initialization',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-js-tutorial/blob/master/03-Live-initialization/03-Live-initialization.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-js-tutorial/blob/master/03-Live-initialization/03-Live-initialization.en.md',
    },
    tags: ['tutorials', 'classic', 'i-bem.js'],
    bundle: 'platform',
    next: false
  },
  {
    url: '/tutorials/classic/dist-quick-start/',
    site: '/tutorials/classic/',
    title: {
      ru: 'Dist bem-components: подключаем блоки на страницу',
      // uk: 'Збираємо статичну сторінку',
      en: 'Dist bem-components: adding blocks to a page',
    },
    source: {
      ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/dist-quick-start/dist-quick-start.ru.md',
      // uk: '',
      en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/dist-quick-start/dist-quick-start.en.md',
    },
    tags: ['tutorials', 'classic', 'bem-components'],
    bundle: 'platform'
  }
];

const tutorialsReact = [
  // {
  //   url: '/tutorials/react/',
  //   site: '/tutorials/',
  //   subtitle: {
  //     ru: 'оаоао',
  //     en: 'TBD',
  //     uk: 'TBD'
  //   },
  //   title: {
  //     ru: 'БЭМ и React',
  //     uk: 'TBD',
  //     en: 'TBD'
  //   },
  //   source: {
  //     ru: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.ru.md',
  //     // uk: '',
  //     en: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/index.en.md',
  //   },
  //   tags: ['tutorials', 'react'],
  //   bundle: 'platform',
  //   prev: false
  // }
];

const libs = [
  {
    url: '/libraries/',
    site: '/libraries/',
    title: {
      ru: 'Библиотеки',
      uk: 'Бібліотеки',
      en: 'Libraries'
    },
    tags: ['libs'],
    type: 'promo',
    bundle: 'platform-index' // check me!
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
      uk: 'Tutorials',
      en: 'Tutorials'
    },
    tags: ['tutorials'],
    type: 'promo',
    bundle: 'platform-index' // check me!
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
      uk: 'Спільнота',
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
*/
];

module.exports = [
  {
    url: '/',
    site: '/',
    title: {
      ru: 'БЭМ',
      uk: 'БЕМ',
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
    uk: 'Форум',
    en: 'Forum',
  },
  source: { ru: '', uk: '', en: '' },
  level: 1,
  nav: false
})
.concat(require('./redirects'));
