// Загрузка меню
fetch('/menu.html')
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
    document.querySelectorAll('.menu-item a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Обработчик кликов
    document.querySelectorAll('.menu-item a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href === window.location.href) {
                e.preventDefault();
            }
        });
    });
}
