# Сайт bem.info

Официальный сайт БЭМ.

## Установка

Склонировать репозиторий проекта:
```bash
$ git clone https://github.com/bem-site/bem.info.git
$ cd bem.info
```

Установить зависимости:
```bash
$ npm i
```

Запустить сборку данных:
```bash
$ TOKEN={pass your github token here} gulp data
```

Запустить компиляцию страниц, watcher и статический сервер:
```bash
$ gulp
```

Открыть в браузере [http://localhost:8008/bem.info/ru/](http://localhost:8008/bem.info/ru/).

## Модель данных

[Модель данных](./content/model.js) для сайта.

## Сборка библиотек для сайта

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
