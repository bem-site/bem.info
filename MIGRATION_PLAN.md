# План миграции bem.info на статический хостинг

## Статус выполнения

| Фаза | Описание | Статус |
|------|----------|--------|
| Фаза 1 | Удаление серверных компонентов | **Готово** |
| Фаза 2 | Адаптация редиректов для статики | **Готово** |
| Фаза 3 | CI/CD через GitHub Actions | **Готово** |
| Фаза 4 | Апгрейд Node.js | **Готово** |
| Фаза 5 | Удаление Docker/Nginx/Travis | **Готово** |
| Фаза 6 | Поиск | Отложено (Yandex Sitesearch работает) |
| Фаза 7 | Финальная валидация | Частично |

---

## Текущее состояние

| Компонент | Реализация | Зависимость от сервера |
|-----------|-----------|----------------------|
| Контент (300+ страниц) | Markdown из GitHub → Gorshochek → BEMTREE/BEMHTML → статический HTML | Только при сборке (GitHub API + TOKEN) |
| CSS/JS бандлы (14 шт.) | ENB: BEMTREE + BEMHTML + CSS + JS per bundle per lang | Только при сборке |
| Feedback + Doc Rating | ~~`$.post/$.get` → `/doc-feedback/`~~ **Удалены** | ~~Runtime~~ Нет |
| Forum (`/forum/`) | ~~Бандл-каркас (CSS only)~~ **Удалён**, ссылки → GitHub Issues | Нет |
| Поиск | Клиентский, форма → Yandex Sitesearch | Нет (внешний сервис) |
| Редиректы (~200 шт.) | HTML `<meta http-equiv="refresh">` + JS-роутер в `404.html` | Нет |
| Деплой | GitHub Actions → GitHub Pages | Нет |
| CI | GitHub Actions: build + deploy | Нет |

**Вывод**: сайт полностью статический. Серверных зависимостей нет.

---

## Фаза 1: Удаление серверных компонентов — ГОТОВО

### 1.1 Doc Rating — удалён
- [x] Удалён каталог `blocks/common/doc-rating/` (6 файлов)
- [x] Убрано включение из `blocks/common/aside/aside.bemtree.js`
- [x] Убрана зависимость из `blocks/common/aside/aside.css`
- [x] Убрана зависимость из `blocks/common/article/article.deps.js`
- [x] Убрана зависимость из `blocks/common/page/page.deps.js`

### 1.2 Feedback — удалён
- [x] Удалён каталог `blocks/common/feedback/` (~25 файлов)
- [x] Блок `article-amendments` уже содержит ссылку на GitHub Issues — это основной канал обратной связи
- [x] Убраны все зависимости из `*.deps.js`

### 1.3 Forum — удалён
- [x] Удалён каталог `blocks/forum/` (4 CSS-файла)
- [x] Удалён каталог `bundles/forum/`
- [x] Убрана конфигурация из `.enb/make.js`
- [x] Убрана запись из `content/model.js`
- [x] Ссылка в header заменена на GitHub Issues
- [x] i18n обновлён: `Forum` → `Issues`
- [x] Редиректы `/forum/-NNN/` упрощены до regex → GitHub Issues
- [x] Убран уровень из `.bemhint.js`

### 1.4 Серверная инфраструктура обратной связи — удалена
- [x] Удалён `doc-feedback-handlers` из зависимостей
- [x] Удалён middleware из `gulpfile.js`
- [x] Удалены скрипты `feedback` из `package.json`

---

## Фаза 2: Адаптация редиректов для статического хостинга — ГОТОВО

### 2.1 Формат редиректов
- [x] Создан `tools/generate-static-redirects.js` — генерирует HTML-файлы с `<meta http-equiv="refresh">`
- [x] Regex-редиректы обрабатываются отдельно через JS-роутер

### 2.2 JS-роутер в 404.html
- [x] Создан `tools/generate-404-router.js` — генерирует `404.html` с JS-роутером для regex-паттернов
- [x] Отдельные `404.html` для `/ru/` и `/en/`, + корневой `404.html` с language-prefixed паттернами

### 2.3 Интеграция в gulp
- [x] Добавлен таск `generate-redirects` в `gulpfile.js`
- [x] Включён в pipeline `gulp build`

### 2.4 Корневой index.html
- [x] `static/index.html` — умный редирект по `navigator.language` (ru/uk → `/ru/`, остальные → `/en/`)
- [x] `<noscript>` fallback на `/en/`

---

## Фаза 3: CI/CD через GitHub Actions — ГОТОВО

### 3.1 Workflow
- [x] Создан `.github/workflows/build-deploy.yml`
- [x] Триггеры: push to master, еженедельный cron, manual dispatch
- [x] Node 18, npm ci, gulp build
- [x] Deploy to GitHub Pages через `actions/deploy-pages@v4`

### 3.2 Мультиязычность
- [x] Выбран вариант A: единый сайт с `/ru/` и `/en/` поддиректориями
- [x] Корневой `index.html` с JS-редиректом по `navigator.language`

### 3.3 SourceCraft Sites
- [ ] Уточнить CLI/API SourceCraft Sites для деплоя статики
- [ ] Добавить шаг в workflow (или отдельный workflow)

---

## Фаза 4: Апгрейд Node.js — ГОТОВО

### 4.1 Изменения
- [x] `package.json` engines: `>=4.1` → `>=18.0.0`
- [x] `lib/gorshochek/package.json` engines: `>= 4.x` → `>= 18.x`
- [x] Исправлен `new Buffer()` → `Buffer.from()` в `lib/gorshochek/src/tasks/docs/load-from-github.js`
- [x] GitHub Actions workflow использует Node 18

### 4.2 Известные проблемы (низкий приоритет)
- Q promises — устаревшие, но функциональные
- Старый `github` пакет (0.2.4) — может потребовать замену на `@octokit/rest`
- `cheerio` 0.20 — устаревший, но функциональный

---

## Фаза 5: Удаление инфраструктуры Yandex/Docker — ГОТОВО

### 5.1 Удалённые файлы
- [x] `Dockerfile`
- [x] `.travis.yml`
- [x] `tools/nginx.conf`
- [x] `tools/generate-nginx-host-conf.js`

### 5.2 Правки
- [x] Удалены скрипты `docker-build`, `docker-push` из `package.json`
- [x] Удалена генерация nginx-конфигов из `gulpfile.js`
- [x] Удалены `require('got')`, `require('querystring')` из `gulpfile.js`

---

## Фаза 6: Поиск — ОТЛОЖЕНО

### 6.1 Текущее состояние
Поиск — клиентская форма, сабмит на `yandex.ru/sitesearch` / `yandex.com/sitesearch` (searchid: 1944806).
Это чисто клиентский компонент, не зависящий от сервера. Работает как внешний сервис.

### 6.2 Рекомендация на будущее
Если Yandex Sitesearch перестанет индексировать новый домен:
- **Pagefind** — zero-config, встраивается в билд, работает на статике
- Установка: `npx pagefind --site output/bem.info/`
- Добавляется как шаг после `gulp build` в CI

---

## Фаза 7: Финальная валидация — ЧАСТИЧНО

- [x] README.md обновлён
- [x] i18n обновлён для всех заменённых компонентов
- [ ] Полный прогон `gulp build` в CI (требует настройки secrets)
- [ ] Проверить все страницы на 404 (crawl output)
- [ ] Проверить редиректы
- [ ] Проверить мультиязычные переключатели
- [ ] Убедиться, что Yandex Metrica работает (или удалить)
- [ ] Обновить DNS (CNAME → GitHub Pages / SourceCraft)

---

## Коммиты миграции

| Коммит | Описание | Изменения |
|--------|----------|-----------|
| `9d80b75` | Основная миграция: удаление серверных компонентов, GitHub Actions CI/CD | 57 файлов, +495/-1651 |
| `5a6eb91` | Очистка: ссылки на удалённые компоненты, README, i18n | 4 файла |
| `06fe77a` | Node 18+: Buffer.from, language redirect, root 404 | 5 файлов |

---

## Риски (обновлённые)

| Риск | Вероятность | Статус |
|------|-------------|--------|
| ~~ENB не работает на Node 18+~~ | ~~Высокая~~ | Требует проверки при первом билде в CI |
| Источники контента (GitHub repos) мертвы | Средняя | Не проверено |
| ~~Regex-редиректы не работают на статике~~ | ~~Высокая~~ | **Решено**: JS-роутер в 404.html |
| Yandex Sitesearch перестанет индексировать | Средняя | Pagefind как запасной вариант |
| ~~Потеря данных обратной связи~~ | ~~Низкая~~ | **Решено**: заменено на GitHub Issues |
| `bem-info-data` ветка удалена | Средняя | Не проверено |
