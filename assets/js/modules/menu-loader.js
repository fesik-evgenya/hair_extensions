// Загрузка меню
fetch('./menu.html')
    .then(response => {
        if (!response.ok) throw new Error('Меню не найдено');
        return response.text();
    })
    .then(html => {
        document.getElementById('header-container').innerHTML = html;
        initMenu();
    })
    .catch(error => {
        console.error('Ошибка загрузки меню:', error);
        document.getElementById('header-container').innerHTML =
            '<p class="error">Меню временно недоступно</p>';
    });

// Инициализация меню
function initMenu() {
    // Подсветка активной страницы
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('nav__link--active');
            link.parentElement.classList.add('nav__item--active');
        }
    });

    // Обработчик кликов
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href === window.location.href) {
                e.preventDefault();
            }
        });
    });

    // Mobile menu toggle
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('header__nav--active');
            burger.classList.toggle('header__burger--active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close menu when clicking on links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('header__nav--active');
            burger.classList.remove('header__burger--active');
            document.body.classList.remove('no-scroll');
        });
    });
}