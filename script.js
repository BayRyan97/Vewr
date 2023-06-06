const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', () => {
    toggleNightMode(document.body);
    toggleNightMode(document.querySelector('header'));
    toggleNightMode(document.querySelector('.hero'));
    toggleNightMode(document.querySelector('.footer'));

    let benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card) => {
        toggleNightMode(card);
    });
});

function toggleNightMode(element) {
    element.classList.toggle('night');
}
