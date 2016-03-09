# Сайт bem.info

Главный сайт по БЭМ методологии.

## Установка

Склонировать репозиторий проекта:
```bash
$ git clone https://github.com/vithar/bem.info.git
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

## Поэтапная сборка

Собрать данные. Сборка данных осуществляется с помощью [gorshochek](https://github.com/bem-site/gorshochek).

Примечание: для сборки данных нужно передать ваш гитхаб-токен, с помощью которого будет осуществляться
загрузка данных для страниц сайта.
```bash
$ TOKEN={pass your github token here} gulp data
```

Скомпилировать статические HTML-страницы:
```bash
$ gulp compile-pages
```

Запуск файлового наблюдателя и локального сервера разработки:
```bash
$ gulp browser-sync
```

## Модель данных

* [Модель данных](./content-en/model.en.json) для английской версии сайта
* [Модель данных](./content-ru/model.ru.json) для русской версии сайта

## Полезные команды

Полная пересборка данных для сайта:
```
$ TOKEN={pass your github token here} npm run data-rebuild
```
