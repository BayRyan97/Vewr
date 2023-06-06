document.getElementById('theme-switch').addEventListener('change', function(event) {
    ['body', 'header', 'benefit-card', 'footer'].forEach(function(cls) {
        document.querySelector('.' + cls).classList.toggle('night');
    });
});
