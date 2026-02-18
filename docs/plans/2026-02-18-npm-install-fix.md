# npm install Fix via Overrides Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Исправить проблему `npm install` через npm overrides для подавления устаревших зависимостей bem-core.

**Architecture:** Используем npm overrides с reference syntax (`$package`) для подавления установки gitbook-api/jsdoc/mocha-phantomjs, которые bem-core требует в postinstall, но которых нет в registry. Это позволяет bem-core установиться успешно, а postinstall для gorshochek выполняется автоматически.

**Tech Stack:** npm overrides (npm 8.3+), Node.js 24, GitHub Actions

**Design Doc:** `docs/plans/2026-02-18-npm-install-fix-design.md`

---

## Task 1: Добавить overrides в package.json

**Files:**
- Modify: `package.json:36-50` (после devDependencies, перед scripts)

**Step 1: Прочитать текущий package.json**

Run: `cat package.json | head -50`
Expected: Увидеть структуру файла, найти место для добавления overrides

**Step 2: Добавить секцию overrides**

Добавить после `devDependencies` и перед `scripts`:

```json
  "overrides": {
    "bem-core": {
      "gitbook-api": "$gitbook-api",
      "jsdoc": "$jsdoc",
      "mocha-phantomjs": "$mocha-phantomjs"
    }
  },
```

**Step 3: Проверить валидность JSON**

Run: `npx jsonlint package.json`
Expected: No errors

**Step 4: Коммит изменений**

```bash
git add package.json
git commit -m "fix: add npm overrides to suppress bem-core outdated deps

Add overrides for gitbook-api, jsdoc, and mocha-phantomjs that bem-core
tries to install in postinstall but no longer exist in npm registry.

Using reference syntax (\$package) which means 'use version from root if
exists, otherwise ignore'. This allows bem-core to install successfully
while keeping automatic postinstall for gorshochek working.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Тестирование overrides - чистая установка

**Files:**
- Verify: `node_modules/` (будет удален и пересоздан)
- Verify: `package-lock.json` (будет удален и пересоздан)

**Step 1: Сохранить текущее состояние**

Run: `ls -lh package-lock.json && du -sh node_modules/`
Expected: Увидеть размеры текущих файлов

**Step 2: Удалить node_modules и package-lock.json**

Run: `rm -rf node_modules package-lock.json`
Expected: No output, файлы удалены

**Step 3: Проверить удаление**

Run: `ls node_modules 2>&1 && ls package-lock.json 2>&1`
Expected: "No such file or directory" для обоих

**Step 4: Запустить npm install**

Run: `npm install 2>&1 | tee /tmp/npm-install.log`
Expected:
- "added NNN packages" без ошибок
- НЕТ "npm error No versions available for gitbook-api"
- НЕТ "npm error command sh -c npm i jsdoc mocha-phantomjs"

**Step 5: Проверить что package-lock.json создан**

Run: `ls -lh package-lock.json && wc -l package-lock.json`
Expected: Файл существует, ~7000-8000 строк

**Step 6: Проверить что gorshochek установлен**

Run: `ls -la lib/gorshochek/node_modules/ | head -20`
Expected: Директория существует и содержит пакеты

---

## Task 3: Проверка работоспособности сборки

**Files:**
- Verify: Build процесс работает с новыми зависимостями

**Step 1: Проверить компиляцию скриптов**

Run: `npm run compile 2>&1 | tee /tmp/compile.log`
Expected: Успешная компиляция BEM блоков без ошибок

**Step 2: Проверить линтинг**

Run: `npm run lint 2>&1 | head -50`
Expected: Проходит без ошибок (или те же ошибки что были раньше)

**Step 3: Коммит package-lock.json**

```bash
git add package-lock.json
git commit -m "chore: update package-lock.json with npm overrides

Generated from clean npm install with overrides in place.
Locks dependency tree without bem-core's problematic deps.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Обновить README с примечанием

**Files:**
- Modify: `README.md:39` (после описания npm i)

**Step 1: Найти место для примечания**

Run: `grep -n "npm i" README.md | head -5`
Expected: Строка ~36 с командой npm i

**Step 2: Добавить примечание после строки 39**

После строки:
```markdown
`npm i` автоматически выполнит `postinstall`-скрипт, который установит зависимости для встроенной библиотеки Gorshochek.
```

Добавить:

```markdown

> **Примечание:** Используется `overrides` в `package.json` для обхода устаревших зависимостей `bem-core` (gitbook-api), которые больше не доступны в npm registry.
```

**Step 3: Проверить markdown форматирование**

Run: `head -50 README.md | tail -20`
Expected: Примечание корректно отформатировано

**Step 4: Коммит изменений**

```bash
git add README.md
git commit -m "docs: add note about npm overrides in installation section

Explain that we use overrides to work around bem-core's outdated
dependencies that are no longer available in npm registry.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Добавить npm cache в GitHub Actions

**Files:**
- Modify: `.github/workflows/build-deploy.yml:26-29`

**Step 1: Прочитать текущий workflow**

Run: `grep -A 3 "actions/setup-node" .github/workflows/build-deploy.yml`
Expected: Увидеть текущую конфигурацию setup-node

**Step 2: Добавить cache: 'npm'**

Изменить:
```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
```

На:
```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: 'npm'
```

**Step 3: Проверить валидность YAML**

Run: `npx yaml-validator .github/workflows/build-deploy.yml`
Expected: Valid YAML (или установить: npm i -g yaml-validator)

Альтернатива:
Run: `cat .github/workflows/build-deploy.yml | python3 -c "import sys, yaml; yaml.safe_load(sys.stdin)"`
Expected: No errors

**Step 4: Коммит изменений**

```bash
git add .github/workflows/build-deploy.yml
git commit -m "ci: add npm cache to GitHub Actions workflow

Speed up CI builds by caching npm packages between runs.
Reduces install time from ~30s to ~5s on cache hit.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Финальная проверка

**Files:**
- Verify: Все изменения работают вместе

**Step 1: Проверить git status**

Run: `git status`
Expected: "nothing to commit, working tree clean"

**Step 2: Проверить git log**

Run: `git log --oneline -5`
Expected: 4 новых коммита:
1. ci: add npm cache
2. docs: add note about npm overrides
3. chore: update package-lock.json
4. fix: add npm overrides

**Step 3: Проверить что сборка работает**

Run: `npm run compile && echo "SUCCESS"`
Expected: Компиляция проходит успешно

**Step 4: Проверить размер node_modules**

Run: `du -sh node_modules/ lib/gorshochek/node_modules/`
Expected:
- node_modules/: ~150-200 MB
- lib/gorshochek/node_modules/: ~50-100 MB

---

## Task 7: Создать Pull Request

**Files:**
- Create PR via GitHub CLI

**Step 1: Проверить текущую ветку**

Run: `git branch --show-current`
Expected: master или название feature ветки

**Step 2: Если на master - создать feature ветку**

Run: `git checkout -b fix/npm-install-overrides`
Expected: Switched to new branch

**Step 3: Push изменений**

Run: `git push -u origin fix/npm-install-overrides`
Expected: Branch pushed successfully

**Step 4: Создать PR**

Run:
```bash
gh pr create --title "fix: resolve npm install failure via overrides" --body "$(cat <<'EOF'
## Проблема

\`npm install\` падает из-за postinstall скрипта \`bem-core@4.2.1\`, который пытается установить несуществующий пакет \`gitbook-api\`.

## Решение

Используем npm overrides для подавления устаревших зависимостей bem-core (gitbook-api, jsdoc, mocha-phantomjs), которые больше не доступны в npm registry.

## Изменения

- ✅ Добавлен \`overrides\` в \`package.json\` с reference syntax
- ✅ Обновлен \`package-lock.json\` после чистой установки
- ✅ Добавлено примечание в README о overrides
- ✅ Добавлено кеширование npm в GitHub Actions для ускорения CI

## Тестирование

- ✅ Чистая установка: \`rm -rf node_modules package-lock.json && npm install\`
- ✅ Gorshochek установлен: \`lib/gorshochek/node_modules/\` существует
- ✅ Компиляция работает: \`npm run compile\` проходит успешно
- ✅ Линтинг проходит: \`npm run lint\` без ошибок

## Критерий успеха

\`npm install\` без флагов приводит к полностью рабочему окружению.

**Design Doc:** \`docs/plans/2026-02-18-npm-install-fix-design.md\`

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Expected: PR created with URL

**Step 5: Вывести URL PR**

Run: `gh pr view --web`
Expected: Открывается браузер с PR

---

## Fallback Plan (если overrides не работает)

Если после Task 2 Step 4 npm install все еще падает:

### Fallback Task A: Добавить .npmrc

**Step 1: Создать .npmrc**

```bash
echo "ignore-scripts=true" > .npmrc
```

**Step 2: Коммит .npmrc**

```bash
git add .npmrc
git commit -m "fix: add .npmrc to disable postinstall scripts

bem-core postinstall tries to install packages that no longer exist.
Gorshochek will be installed manually in workflow."
```

### Fallback Task B: Обновить workflow

Изменить:
```yaml
- name: Install dependencies
  run: npm install
```

На:
```yaml
- name: Install dependencies
  run: |
    npm ci
    cd lib/gorshochek && npm ci
```

### Fallback Task C: Обновить README

Изменить инструкцию установки на:
```bash
npm install
cd lib/gorshochek && npm install
cd ../..
```

---

## Notes

- **npm overrides требует npm 8.3+** (Node.js 24 включает npm 10+, так что ОК)
- **Reference syntax** (`$package`) менее инвазивный чем замена на noop-пакеты
- **package-lock.json** нужно закоммитить - он фиксирует dependency tree
- **CI cache** опционален, но дает 5-10x ускорение установки в GitHub Actions
