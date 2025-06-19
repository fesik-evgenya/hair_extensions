document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentNode;
        item.classList.toggle('active');

        // Закрываем другие открытые элементы
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});