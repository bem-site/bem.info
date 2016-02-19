# Сайт bem.info

Главный сайт по БЭМ методологии.

## Установка

Склонировать репозиторий проекта:
```bash
$ git clone https://github.com/vithar/bem.info.git
```

Установить зависимости:
```bash
$ npm install
```

Запустить сборку данных, компиляцию страниц и статический сервер:
```bash
$ TOKEN={pass your github token here} gulp
```

## Поэтапная сборка

Собрать данные. Сборка данных осуществляется с помощью инструмента [gorshochek](https://github.com/bem-site/gorshochek).

Примечание: для сборки данных нужно передать ваш гитхаб-токен, с помощью которого будет осуществляться
загрузка данных для страниц сайта.
```bash
$ TOKEN={pass your github token here} gulp data-build
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

* [Модель данных](./content/model.en.json) для английской версии сайта
* [Модель данных](./content/model.ru.json) для русской версии сайта

## Полезные команды

Полная пересборка данных для сайта:
```
$ TOKEN={pass your github token here} npm run data-rebuild
```
