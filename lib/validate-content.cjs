'use strict';

// Гвард от «тихой гнили»: gorshochek глотает отказ загрузки источника
// (Q.allSettled), и страница молча рендерится пустой. Возвращает URL
// опубликованных страниц, у которых заявлен source, но контент не загрузился.
module.exports = pages =>
    pages.filter(p => p.published && p.source && !p.contentFile).map(p => p.url);
