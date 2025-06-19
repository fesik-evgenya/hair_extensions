document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const gallery = document.querySelector('.cases-gallery');
    const filterButtons = document.querySelectorAll('.filters-nav__btn');

    // Рендер карточек
    const renderCases = (cases) => {
        gallery.innerHTML = cases.map(item => `
            <article class="case-card" 
                     data-category="${item.method.toLowerCase()}" 
                     data-id="${item.id}">
                <div class="case-card__image-container">
                <div class="case-card__frame" aria-hidden="true"></div>
                    <img src="${item.before}" 
                         alt="${item.alt}" 
                         class="case-card__image case-card__image--before" 
                         loading="lazy"
                         width="608" 
                         height="1250"
                         data-role="before-image">
                    <img src="${item.after}" 
                     alt="Результат: ${item.description_p}. ${item.description_title}" 
                     class="case-card__image case-card__image--after" 
                     loading="lazy"
                     width="608" 
                     height="1250"
                     data-role="after-image">
                </div>
                <div class="case-card__caption">
                    <h3 class="case-card__title" data-role="title">${item.description_title}</h3>
                <p class="case-card__description" data-role="description">${item.description_p}</p>
                <span class="case-card__method" 
                      data-role="method-badge">
                    ${item.method}
                </span>
                </div>
            </article>
        `).join('');

        // Инициализация автоматического переключения для мобильных
        initMobileAnimation();
    };

    // Фильтрация карточек
    const filterCases = (category) => {
        const normalizedCategory = category.toLowerCase();
        document.querySelectorAll('.case-card').forEach(card => {
            const cardCategory = card.dataset.category.toLowerCase();
            const shouldShow = normalizedCategory === 'все' ||
                cardCategory === normalizedCategory;
            card.style.display = shouldShow ? 'block' : 'none';
        });

        // Переинициализация анимации после фильтрации
        initMobileAnimation();
    };

    // Обработчики фильтров
    const handleFilterClick = (btn) => {
        // Сброс активного состояния
        filterButtons.forEach(b => {
            b.classList.remove('filters-nav__btn--active');
            b.setAttribute('aria-pressed', 'false');
        });

        // Установка нового состояния
        btn.classList.add('filters-nav__btn--active');
        btn.setAttribute('aria-pressed', 'true');

        // Применение фильтра
        const category = btn.dataset.filter;
        filterCases(category);

        // Прокрутка к началу галереи
        gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Автоматическое переключение для мобильных
    const initMobileAnimation = () => {
        // Проверяем, мобильное ли устройство
        const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

        if (isMobile) {
            const observerOptions = {
                threshold: 1 // 100% видимости карточки
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const card = entry.target;
                    const afterImage = card.querySelector('.case-card__image--after');

                    if (entry.isIntersecting) {
                        afterImage.style.opacity = '1';
                    } else {
                        afterImage.style.opacity = '0';
                    }
                });
            }, observerOptions);

            // Наблюдаем за всеми видимыми карточками
            document.querySelectorAll('.case-card:not([style*="display: none"])').forEach(card => {
                observer.observe(card);
            });
        }
    };

    // Инициализация
    const init = () => {
        // Рендер карточек
        if (portfolioCases?.length) {
            renderCases(portfolioCases);
        } else {
            gallery.innerHTML = '<p class="error">Работы не найдены</p>';
        }

        // Назначение обработчиков
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => handleFilterClick(btn));
        });
    };

    // Запуск приложения
    init();
});