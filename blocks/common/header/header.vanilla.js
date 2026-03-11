/**
 * Header block — vanilla JS replacement for i-bem-dom based header.js
 * Handles search toggle, ESC to close, and mobile menu.
 */
(function() {
    document.addEventListener('click', function(e) {
        var toggle = e.target.closest('.header__toggle');
        var open = e.target.closest('.header__open');
        var close = e.target.closest('.header__close');
        var submit = e.target.closest('.header__submit, .search__submit');

        var header = document.querySelector('.header');
        if (!header) return;

        if (toggle) {
            header.classList.toggle('header_opened');
            toggle.classList.toggle('header__toggle_active');
            var search = header.querySelector('.search');
            if (search) search.classList.toggle('search_opened');

            if (header.classList.contains('header_opened')) {
                focusInput(header);
            } else {
                clearInput(header);
            }
        }

        if (open) {
            openSearch(header);
        }

        if (close || submit) {
            closeSearch(header);
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) { // ESC
            var header = document.querySelector('.header.header_opened');
            if (header) closeSearch(header);
        }
    });

    function openSearch(header) {
        header.classList.add('header_opened');
        var search = header.querySelector('.search');
        if (search) search.classList.add('search_opened');
        var toggle = header.querySelector('.header__toggle');
        if (toggle) toggle.classList.add('header__toggle_active');
        focusInput(header);
    }

    function closeSearch(header) {
        header.classList.remove('header_opened');
        var search = header.querySelector('.search');
        if (search) search.classList.remove('search_opened');
        var toggle = header.querySelector('.header__toggle');
        if (toggle) toggle.classList.remove('header__toggle_active');
        setTimeout(function() { clearInput(header); }, 150);
    }

    function focusInput(header) {
        if (!window.matchMedia('(max-width: 800px)').matches) {
            var input = header.querySelector('.input__control');
            if (input) input.focus();
        }
    }

    function clearInput(header) {
        var input = header.querySelector('.input__control');
        if (input) input.value = '';
    }
})();
