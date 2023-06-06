const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('night');
    document.querySelector('.header').classList.toggle('night');
    document.querySelector('.footer').classList.toggle('night');
    
    let nightElements = document.querySelectorAll('.night');
    nightElements.forEach((el) => {
        el.classList.toggle('night');
    });
});
