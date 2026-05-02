# Gorshochek

Набор плагинов сборки данных для BEM сайтов.

[![NPM version](http://img.shields.io/npm/v/gorshochek.svg?style=flat)](http://www.npmjs.org/package/gorshochek)
[![Coveralls branch](https://img.shields.io/coveralls/bem-site/gorshochek/master.svg)](https://coveralls.io/r/bem-site/gorshochek?branch=master)
[![Travis](https://img.shields.io/travis/bem-site/gorshochek.svg)](https://travis-ci.org/bem-site/gorshochek)
[![Code Climate](https://codeclimate.com/github/bem-site/gorshochek/badges/gpa.svg)](https://codeclimate.com/github/bem-site/gorshochek)
[![David](https://img.shields.io/david/bem-site/gorshochek.svg)](https://david-dm.org/bem-site/gorshochek)
![](https://reposs.herokuapp.com/?path=bem-site/gorshochek&style=flat)

Модуль сборки данных для bem сайтов.



![GitHub Logo](./.logo.jpg)

## Установка

Пакет устанавливается как обычная npm зависимость:
```
$ npm install --save gorshochek
```

## Примеры использования

Простой запуск сборки путем последовательного выполнения всех необходимых задач: [пример](./examples/native-full.js).

Запуск с помощью [gulp](https://npmjs.org/package/gulp) можно посмотреть [здесь](./examples/gulp-full.js).

## Спецификация модели данных

Модель данных описывается в JSON-файле, который должен содержать массив объектов, каждый из которых представляет
собой совокупность мета-данных для определенной страницы сайта. Пример такой структуры приведен ниже:
```json
[
 {
    "url": "/",
    "site": "/",
    "title": "БЭМ",
    "content": "БЭМ прекрасен"
  },
  {
    "url": "/methodology/",
    "site": "/methodology/",
    "title": "Методология",
    "source": "./examples/bemjson/methodology.ru.bemjson.js",
    "type": "bemjson.js"
  },
  ...
]  
```

Каждый объект в массиве страниц модели может иметь следующий набор полей:

#### url

Url страницы в браузере.
* Тип данных: `String`
* Обязательное поле 
* Должно быть уникальным
* Должно заканчиваться символом `/`

#### site

Url раздела сайта для страницы
* Тип данных: `String`
* Обязательное поле
* Должно заканчиваться символом `/`

#### title

Заголовок страницы. Будет использован при построении меню, хлебных крошек, тега `<title>` страницы и т. д.
* Тип данных: `String`
* Обязательное поле

#### published

Флаг страницы, при указании которого в false страница будет исключена из сборки.
* Тип данных: `Boolean`
* Значение по умолчанию: `true`

#### content

Контент страницы. Может быть использован для страниц, у которых есть небольшой неизменяемый контент.
* Тип данных: `String`
* Значение по умолчанию: нет

#### source

Ccылка на источник, с которого будет загружен контент для страницы. 
Может быть относительной (относительно рабочей директории проекта) ссылкой 
на файл локальной файловой системы или http-ресурс.
* Тип данных: `String`
* Значение по умолчанию: нет

Примеры:
* `./examples/bemjson/methodology.ru.bemjson.js`
* `https://github.com/bem-site/gorshochek/README.md`

#### type

Тип данных страницы, например: `bemjson.js`. Используется при шаблонизации страниц.
* Тип данных: `String`
* Значение по умолчанию: нет

#### bundle

Имя BEM-бандла для сборки страниц.
* Тип данных: `String`
* Значение по умолчанию: `index`

#### tags

Массив тегов для страницы, для которых могут быть построены соответствующие страницы.
* Тип данных: `String[]`
* Значение по умолчанию: `[]`

## Создание собственной задачи сборки

Задача сборки представляет собой функцию высшего порядка, т. е. возвращающую другую анонимную функцию,
без аргументов реализующую логику задачи.

Любая задача сборки, работающая с моделью, должна принимать ее экземпляр в качестве первого аргумента.
Кроме того, задача может включать в себя дополнительные опции, которые удобно передать в виде объекта вторым параметром.
Для организации задач в виде цепочки промисов возвращаемая анонимная функция должна сама возвращать промис-объект.

Таким образом требования, описанные выше, позволяют записать код простейшей задачи, которая
выводит в консоль параметр `name`, переданный ей в качестве опции:

```js
module.exports = function(model, options = {}) {
    return function() {
        console.log('Hello ' + options.name);
        return Promise.resolve(model);
    }
}
```

## Тестирование

Запуск тестов с вычислением покрытия кода тестами с помощью инструмента [istanbul](https://www.npmjs.com/package/istanbul):
```bash
npm test
```

Проверка синтаксиса кода с помощью [eslint](http://eslint.org) и [jscs](https://www.npmjs.com/package/jscs)
```bash
npm run lint
```

Особая благодарность за помощь в разработке:

* Гриненко Владимир (http://github.com/tadatuta)
* Харисов Виталий (https://github.com/vithar)

Разработчик Кузнецов Андрей Серргеевич @tormozz48
Вопросы и предложения присылать по адресу: andrey.kuznetsov48@yandex.ru
