# Сайт bem.info

Официальный сайт [БЭМ](https://ru.bem.info/) (Block Element Modifier) — методологии разработки веб-интерфейсов. Сайт сам построен по БЭМ-методологии и содержит документацию, руководства, информацию о технологиях и библиотеках БЭМ.

**Лицензия:** MPL-2.0 (для библиотеки Gorshochek)

## Содержание

- [Требования](#требования)
- [Установка и запуск](#установка-и-запуск)
- [Структура проекта](#структура-проекта)
- [Архитектура](#архитектура)
- [Система сборки](#система-сборки)
- [Переменные окружения](#переменные-окружения)
- [Разделы сайта](#разделы-сайта)
- [Модель данных](#модель-данных)
- [Блоки (компоненты)](#блоки-компоненты)
- [Линтинг и качество кода](#линтинг-и-качество-кода)
- [Деплой](#деплой)
- [Сборка библиотек для сайта](#сборка-библиотек-для-сайта)

## Требования

- Node.js >= 24
- npm
- GitHub-токен (для загрузки контента с GitHub)

## Установка и запуск

### Первоначальная настройка

Склонировать репозиторий и установить зависимости:
```bash
git clone https://github.com/bem-site/bem.info.git
cd bem.info
npm i
```

`npm i` автоматически выполнит `postinstall`-скрипт, который установит зависимости для встроенной библиотеки Gorshochek.

### Сборка данных

Данные загружаются из GitHub-репозиториев и локальных источников. Для этого нужен GitHub-токен:
```bash
TOKEN={ваш_github_токен} gulp data
```

Этот шаг достаточно выполнить один раз. Данные кешируются в директорию `.cache/`. При изменении модели данных или источников контента нужно повторить.

### Запуск сервера разработки

```bash
npm start
```

Эта команда:
1. Очищает директорию `output/`
2. Собирает данные (проверяет наличие кеша)
3. Компилирует BEMTREE/BEMHTML-шаблоны, CSS и JS через ENB
4. Минифицирует CSS/JS через esbuild
5. Генерирует статические HTML-страницы
6. Генерирует статические редиректы (HTML meta-refresh + 404.html JS-роутер)
7. Запускает Vite dev-сервер на порту 8008

Открыть в браузере: [http://localhost:8008/bem.info/ru/](http://localhost:8008/bem.info/ru/)

Можно также использовать разные режимы:
```bash
npm run dev       # Только Vite dev-сервер (если output/ уже собран)
npm run preview   # Vite preview-сервер (для проверки продакшен-сборки)
```

## Структура проекта

```
bem.info/
├── .github/
│   └── workflows/
│       └── build-deploy.yml    # CI/CD: сборка и деплой в GitHub Pages
├── blocks/                  # BEM-блоки (компоненты)
│   ├── common/              # Общие блоки для всех разделов
│   ├── promo/               # Промо-компоненты
│   ├── index/               # Главная страница
│   ├── methodology/         # Раздел «Методология»
│   ├── methodology-index/   # Лендинг «Методология»
│   ├── technologies/        # Раздел «Технологии»
│   ├── technologies-index/  # Лендинг «Технологии»
│   ├── toolbox/             # Раздел «Инструменты»
│   ├── toolbox-index/       # Лендинг «Инструменты»
│   ├── libraries/           # Раздел «Библиотеки»
│   ├── libraries-index/     # Лендинг «Библиотеки»
│   ├── tutorials/           # Раздел «Руководства»
│   ├── tutorials-index/     # Лендинг «Руководства»
│   ├── community/           # Раздел «Сообщество»
│   └── community-index/     # Лендинг «Сообщество»
├── bundles/                 # Бандлы ENB (по одному на каждый раздел)
├── content/                 # Модель данных и конфигурация контента
│   ├── model.js             # Главная модель сайта (~2100 строк)
│   ├── redirects/           # Конфигурация URL-редиректов
│   ├── methodology/         # Контент для раздела «Методология»
│   └── platform/            # Платформо-зависимый контент
├── lib/                     # Утилиты и вспомогательные библиотеки
│   ├── gorshochek/          # Фреймворк генерации данных (v2.8.2)
│   ├── data-builder.js      # Оркестратор сборки данных
│   ├── template.js          # Оркестратор компиляции шаблонов
│   ├── prepare-model.js     # Подготовка модели (фильтрация по языку)
│   ├── model-lib.js         # Генерация страниц библиотек
│   ├── model-versioned.js   # Обработка версионированного контента
│   └── article.bemhtml.js   # Шаблоны статей
├── static/                  # Статические ресурсы
│   ├── favicon.ico
│   ├── robots.txt
│   ├── og_image/            # Open Graph изображения
│   └── people/              # Фотографии участников
├── tools/                   # Инструменты сборки
│   ├── generate-static-redirects.js  # Генерация HTML meta-refresh редиректов
│   └── generate-404-router.js        # Генерация 404.html с JS-роутером
├── .enb/
│   └── make.js              # Конфигурация сборщика ENB
├── gulpfile.js              # Gulp-задачи (оркестратор сборки)
├── vite.config.mjs          # Vite: dev-сервер и preview
├── eslint.config.mjs        # ESLint 10 flat config
├── stylelint.config.mjs     # Stylelint 17 конфигурация
├── .bemrc                   # Конфигурация BEM (языки, платформы)
└── .bemhint.js              # Конфигурация bemhint
```

## Архитектура

Проект представляет собой генератор статического сайта, построенный на стеке БЭМ-технологий. Данные проходят через несколько этапов трансформации.

### Конвейер обработки данных

```
1. Модель данных (content/model.js)
   └─ Определяет все страницы сайта, их заголовки, источники контента, метаданные

2. Сборка данных (lib/data-builder.js через Gorshochek)
   ├─ Загрузка Markdown-документов из GitHub-репозиториев
   ├─ Загрузка локальных файлов
   ├─ Преобразование Markdown → BEMJSON
   ├─ Преобразование BEMJSON → HTML
   ├─ Генерация заголовков, мета-тегов, хлебных крошек
   ├─ Обработка ссылок и изображений
   └─ Генерация sitemap.xml

3. Сборка ENB (.enb/make.js)
   ├─ Разрешение зависимостей блоков
   ├─ Компиляция BEMTREE/BEMHTML-шаблонов с i18n
   ├─ Сборка CSS с autoprefixer
   └─ Сборка клиентского JavaScript

4. Минификация (esbuild)
   ├─ CSS → *.min.css
   └─ JS → *.min.js

5. Компиляция страниц (lib/template.js)
   ├─ Применение BEMTREE/BEMHTML-шаблонов к данным
   └─ Генерация статических HTML-страниц

6. Генерация редиректов (tools/)
   ├─ HTML-файлы с meta-refresh для точных URL
   └─ 404.html с JS-роутером для regex-редиректов

7. Результат
   └─ output/bem.info/{lang}/ — готовый статический сайт
```

### Поддержка языков

Проект поддерживает три языка: русский (`ru`), украинский (`uk`) и английский (`en`). По умолчанию собираются `en` и `ru`. Логика фолбэка: `uk → ru → en`.

## Система сборки

### NPM-скрипты

| Команда | Описание |
|---------|----------|
| `npm start` | Полная сборка → Vite dev-сервер |
| `npm run build` | Полная сборка без dev-сервера |
| `npm run dev` | Vite dev-сервер (output/ уже собран) |
| `npm run preview` | Vite preview-сервер |
| `npm test` | Линтинг + юнит-тесты Gorshochek |
| `npm run lint` | ESLint + Stylelint |

### Gulp-задачи

| Задача | Описание |
|--------|----------|
| `gulp data` | Загрузка и генерация данных из GitHub и локальных источников |
| `gulp enb-make` | Сборка ENB: шаблоны, CSS, JS, i18n |
| `gulp minify-bundles` | Минификация CSS/JS через esbuild |
| `gulp compile-pages` | Полная компиляция страниц (enb → minify → copy → html) |
| `gulp build` | Полная сборка: данные → ENB → minify → HTML → редиректы |
| `gulp generate-redirects` | Генерация статических HTML-редиректов и 404.html |
| `gulp watch` | Автопересборка при изменениях в `content/`, `blocks/` |
| `gulp default` | `build` → `watch` |

### Технологический стек

| Инструмент | Версия | Назначение |
|------------|--------|------------|
| **Node.js** | 24+ | Среда выполнения |
| **Vite** | ^7.0.0 | Dev-сервер и preview (замена Browser-sync) |
| **esbuild** | ^0.27.0 | Минификация CSS/JS (замена Borschik) |
| **ESLint** | ^10.0.0 | Линтинг JS (flat config) |
| **Stylelint** | ^17.0.0 | Линтинг CSS |
| **ENB** | ^1.5.1 | Сборка BEM: BEMTREE, BEMHTML, CSS, JS, i18n |
| **Gulp** | ^5.0.0 | Оркестратор сборки |
| **Gorshochek** | 2.8.2 | Фреймворк генерации данных (встроен в `lib/`) |

## Переменные окружения

| Переменная | Описание | По умолчанию |
|------------|----------|-------------|
| `TOKEN` | GitHub API-токен для загрузки контента | — |
| `YENV` | Окружение (`production` / другое). Влияет на корневой URL и минификацию | development |
| `LANGUAGES` | Языки через запятую | `en,ru` |
| `SITES` | Разделы сайта через запятую | `methodology,technologies,toolbox,libraries,tutorials` |
| `PORT` | Порт dev-сервера (Vite) | `8008` |
| `PATH_TO_MODEL` | Путь к кастомной модели данных | `./content/model.js` |
| `GITHUB_HOSTS` | Поддержка приватных GitHub-инстансов | — |
| `DEBUG` | Режим отладки | — |

## Разделы сайта

Каждый раздел состоит из **лендинга** (промо-страница) и **контентных страниц**. Каждому разделу соответствует отдельный бандл ENB.

| Раздел | Описание |
|--------|----------|
| **index** | Главная страница |
| **methodology** | Документация по БЭМ-методологии |
| **technologies** | Технологии: BEMHTML, BEMTREE, BEMJSON и др. |
| **toolbox** | Инструменты: сборщики, линтеры, IDE-плагины |
| **libraries** | Библиотеки: bem-core, bem-components, bem-history |
| **tutorials** | Обучающие руководства |
| **community** | Сообщество и контакты |

## Модель данных

[Модель данных](./content/model.js) — основной файл, описывающий все страницы сайта. Каждая запись содержит:

```javascript
{
    url: '/methodology/quick-start/',    // URL страницы
    site: '/methodology/',               // Раздел
    title: {                             // Заголовок (мультиязычный)
        ru: 'Быстрый старт',
        en: 'Quick start'
    },
    source: {                            // Источник контента
        ru: 'https://github.com/bem-site/bem-method/blob/...',
        en: 'https://github.com/bem-site/bem-method/blob/...'
    },
    bundle: 'methodology',               // Имя бандла ENB
    type: 'page'                         // Тип: 'page', 'promo' и др.
}
```

Редиректы определяются в `content/redirects/` и при сборке генерируют статические HTML-файлы с meta-refresh (для точных URL) и JS-роутер в 404.html (для regex-паттернов):
```javascript
// Точный редирект → HTML meta-refresh файл
{
    url: ['/old-path/', '/alternative-path/'],
    now: '/new-path/'
}

// Regex-редирект → обрабатывается в 404.html
{
    exp: '^/forum/(.*)',
    now: 'https://github.com/bem-site/bem.info/issues'
}
```

## Блоки (компоненты)

Каждый блок следует БЭМ-структуре и может содержать:

| Суффикс | Назначение |
|---------|------------|
| `.bemtree.js` | BEMTREE-шаблон (подготовка данных) |
| `.bemhtml.js` | BEMHTML-шаблон (генерация HTML) |
| `.css` | Стили блока |
| `.deps.js` | Зависимости блока |
| `.i18n/` | Переводы (`ru.js`, `en.js`) |

### Основные общие блоки (`blocks/common/`)

- **page** — корневой обёрточный блок страницы
- **root** — корневой блок приложения
- **header** — шапка сайта с переключателем языков и ссылкой на Issues
- **nav** — навигация
- **footer** — подвал сайта
- **article** — стилизация контентных статей
- **article-amendments** — ссылка «сообщить об ошибке» на GitHub
- **breadcrumbs** — хлебные крошки
- **search** — поиск
- **social-likes** — кнопки социальных сетей
- **yandex-metrica-api** — интеграция с Яндекс.Метрикой

## Линтинг и качество кода

| Инструмент | Версия | Описание | Конфигурация |
|------------|--------|----------|-------------|
| **ESLint** | ^10.0.0 | Линтинг JavaScript (flat config, BEM XJST globals) | `eslint.config.mjs` |
| **Stylelint** | ^17.0.0 | Линтинг CSS с property ordering | `stylelint.config.mjs` |
| **Bemhint** | ^0.10.0 | Валидация БЭМ: именование CSS-классов, файловая структура, зависимости | `.bemhint.js` |

Запуск всех проверок:
```bash
npm test
```

## Деплой

### GitHub Actions (CI/CD)

Проект автоматически собирается и деплоится в GitHub Pages через GitHub Actions:

- **Триггеры**: push в `master`, еженедельный cron (понедельник 06:00 UTC), ручной запуск
- **Node.js**: 24 с кешированием npm
- **Процесс**: `gulp data` → `npm run build` → deploy to GitHub Pages
- **Результат**: статический сайт в `output/bem.info/` публикуется на GitHub Pages

Для ручной сборки:
```bash
# 1. Собрать данные
TOKEN={токен} gulp data

# 2. Собрать сайт для продакшена
YENV=production npm run build
```

### Результат сборки

```
output/
└── bem.info/
    ├── ru/                            # Русская версия
    │   ├── **/*.html                  # Статические HTML-страницы
    │   ├── *.min.css                  # Минифицированные стили (esbuild)
    │   ├── *.min.js                   # Минифицированные скрипты (esbuild)
    │   ├── 404.html                   # JS-роутер для regex-редиректов
    │   └── sitemap.xml
    └── en/                            # Английская версия
        └── ...
```

## Сборка библиотек для сайта

Для генерации данных библиотек (bem-core, bem-components и др.) используется отдельный процесс:

```sh
cd ~
mkdir bem
cd bem
curl https://gist.githubusercontent.com/tadatuta/8754de1e7eba5b6006c09beefe5be91a/raw/299c215d420de4db7615fb6ca3376cc269646fbe/.bemrc.js > .bemrc.js

git clone git@github.com:bem-site/bem-lib-site-data.git
cd bem-lib-site-data
npm i
cd ..

git clone git@github.com:bem-site/bem.info-data.git
```

### bem-core

```sh
git clone git@github.com:bem/bem-core.git bem-core-4.2.1 -b v4.2.1
bem-lib-site-data/bin/bem-lib-site-data bem-core-4.2.1
cd bem.info-data
cp -r bem-core-4.2.1 bem-core-4.2.1.examples
rm -rf bem-core-4.2.1/*.examples
git add bem-core-4.2.1
git ci -m "Add bem-core-4.2.1"
git push origin master
```
