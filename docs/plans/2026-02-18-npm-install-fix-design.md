# Дизайн: Исправление npm install через overrides

**Дата:** 2026-02-18
**Статус:** Одобрено
**Подход:** npm overrides для подавления устаревших зависимостей bem-core

---

## Проблема

`npm install` падает с ошибкой из-за postinstall скрипта `bem-core@4.2.1`, который пытается установить несуществующий пакет `gitbook-api`:

```
npm error command sh -c npm i jsdoc mocha-phantomjs
npm error No versions available for gitbook-api
```

Текущее временное решение: `npm install --ignore-scripts`, затем вручную `cd lib/gorshochek && npm install`.

---

## Решение: npm overrides

### 1. Архитектура

Используем механизм **npm overrides** для переопределения проблемных зависимостей `bem-core`. Основная идея: подавить установку несуществующего `gitbook-api`, который не нужен для работы проекта.

**Стратегия:**
1. Добавляем секцию `overrides` в `package.json` с reference syntax (`$package`)
2. npm подавляет установку отсутствующих пакетов
3. bem-core устанавливается успешно
4. postinstall для gorshochek выполняется автоматически

**Преимущества:**
- Решает проблему через официальный npm механизм
- Сохраняет автоматический postinstall
- Минимальные изменения в коде и CI/CD
- Не требует дополнительных флагов или ручных команд

### 2. Изменения в package.json

Добавить секцию `overrides`:

```json
{
  "overrides": {
    "bem-core": {
      "gitbook-api": "$gitbook-api",
      "jsdoc": "$jsdoc",
      "mocha-phantomjs": "$mocha-phantomjs"
    }
  }
}
```

**Reference syntax** (`$package`):
- Означает "используй версию из корня, если есть, иначе игнорируй"
- Поскольку эти пакеты отсутствуют в корневых зависимостях, npm их пропустит
- Менее инвазивно чем замена на noop-пакеты

### 3. Стратегия тестирования

**План проверки:**
1. Удалить `node_modules/` и `package-lock.json`
2. Добавить `overrides` в `package.json`
3. Запустить `npm install` без флагов
4. Проверить:
   - ✅ Установка завершилась успешно
   - ✅ `lib/gorshochek/node_modules/` существует
   - ✅ `npm run build` проходит без ошибок

**Fallback-стратегия** (если overrides не сработает):
1. Добавить `.npmrc` с `ignore-scripts=true`
2. Изменить workflow: `npm ci && cd lib/gorshochek && npm ci`
3. Обновить README с ручными инструкциями

**Критерий успеха:**
Чистая установка через `npm install` приводит к полностью рабочему окружению.

### 4. Обновления документации

**README.md** - добавить примечание в секцию "Установка и запуск":

```markdown
> **Примечание:** Используется `overrides` в `package.json` для обхода
> устаревших зависимостей `bem-core` (gitbook-api), которые больше не
> доступны в npm registry.
```

Команда установки остается без изменений: `npm i`

### 5. CI/CD изменения

**GitHub Actions workflow** - добавить кеширование npm:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '24'
    cache: 'npm'
```

Команда `npm install` остается без изменений - `overrides` применятся автоматически.

### 6. Файлы для коммита

1. `package.json` - добавить секцию `overrides`
2. `package-lock.json` - обновленный после установки с overrides
3. `README.md` - примечание об overrides
4. `.github/workflows/build-deploy.yml` - добавить cache: 'npm'
5. `docs/plans/2026-02-18-npm-install-fix-design.md` - этот документ

---

## Альтернативы (не выбрано)

### Подход A: Явное управление postinstall
- `.npmrc` с `ignore-scripts=true`
- Переименование postinstall → postinstall:all
- Явный вызов в workflow

**Плюсы:** Полный контроль
**Минусы:** Больше изменений, требует явного вызова

### Подход B: Минимальный - только .npmrc
- Только `.npmrc` с `ignore-scripts=true`
- Ручная установка gorshochek

**Плюсы:** Минимум изменений
**Минусы:** Менее удобно, легко забыть

### Подход C: npm overrides ✅ (выбран)
См. выше.

---

## Риски

| Риск | Вероятность | Митигация |
|------|-------------|-----------|
| overrides не работает на npm текущей версии | Низкая | Fallback на .npmrc + ignore-scripts |
| bem-core падает по другой причине | Низкая | Те же самые тесты покажут, fallback |
| Новые версии npm меняют поведение overrides | Низкая | package-lock.json фиксирует npm версию |

---

## Следующие шаги

1. Реализация через writing-plans skill
2. Тестирование локально
3. Коммит изменений
4. PR в master
5. Проверка CI/CD в GitHub Actions
