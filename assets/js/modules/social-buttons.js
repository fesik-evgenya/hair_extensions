document.addEventListener('DOMContentLoaded', function() {
    // Создаем основной контейнер
    const container = document.createElement('div');
    container.className = 'social-container';

    // Внутренний контейнер для иконок
    const iconsWrapper = document.createElement('div');
    iconsWrapper.className = 'social-icons';

    // Telegram Icon
    const tgIcon = document.createElement('a');
    tgIcon.className = 'social-icon';
    tgIcon.href = "https://t.me/+79913676565";
    tgIcon.target = "_blank";
    tgIcon.innerHTML = `
        <img src="assets/images/icons/icons-telegram.svg" alt="Telegram" 
             style="mix-blend-mode: luminosity">
    `;

    // WhatsApp Icon
    const waIcon = document.createElement('a');
    waIcon.className = 'social-icon';
    waIcon.href = "https://wa.me/+79913676565";
    waIcon.target = "_blank";
    waIcon.innerHTML = `
        <img src="assets/images/icons/icons-whatsapp.svg" alt="WhatsApp"
             style="mix-blend-mode: luminosity">
    `;

    // Собираем структуру
    iconsWrapper.appendChild(tgIcon);
    iconsWrapper.appendChild(waIcon);
    container.appendChild(iconsWrapper);
    document.body.appendChild(container);
});