const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', () => {
    toggleDayMode(document.body);
    toggleDayMode(document.querySelector('header'));
    toggleDayMode(document.querySelector('.hero'));
    toggleDayMode(document.querySelector('.footer'));

    let benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card) => {
        toggleDayMode(card);
    });
});

function toggleDayMode(element) {
    element.classList.toggle('day');
}
