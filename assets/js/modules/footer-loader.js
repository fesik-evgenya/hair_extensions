// Загрузка футера
fetch('./footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Футер не найден');
        return response.text();
    })
    .then(html => {
        document.getElementById('footer-container').innerHTML = html;
    })
    .catch(error => {
        console.error('Ошибка:', error);
        const container = document.getElementById('footer-container');
        container.innerHTML = `
        <div class="footer-error">
            <p>К сожалению, футер не может быть загружен</p>
            <a href="mailto:my-longhair@mail.ru">Свяжитесь с нами</a>
        </div>
    `;
        container.style.backgroundColor = '#2a2a2a';
        container.style.padding = '20px';
        container.style.textAlign = 'center';
    });