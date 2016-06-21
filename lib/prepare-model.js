module.exports = function(model, lang) {
    return model.reduce((acc, sourcePage) => {
        const page = Object.assign({}, sourcePage);

        // если страница — редирект
        if (page.now) {
            // вариант перенаправления — объект { язык: новый-адрес }
            if (typeof page.now !== 'string') {
                // если у текущего языка нет перенаправления — ничего не делаем
                if (!page.now[lang]) {
                    return acc;
                }
                // выбираем вариант перенаправления текущего языка
                page.now = page.now[lang];
            }

            // нормализуем всё к массиву адресов
            if (typeof page.url === 'string') {
               page.url = [page.url];
            }

            acc.redirects.push(page);
            return acc;
        }

        ['source', 'title', 'description'].forEach(field => {
            const value = page[field];

            if (!value) {
                return;
            }

            if (typeof value[lang] === 'undefined') {
                page[field] = (lang === 'uk' ?
                    value.ru || value.en :
                    value.en || value.ru) || value;

                if (field === 'source') {
                    page.isTranslationMissed = true;
                }
            } else {
                page[field] = value[lang];
            }
        });

        acc.model.push(page);
        return acc;
    }, {
        model: [],
        redirects: []
    });
};
