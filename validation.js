const input = document.querySelector('input');

input.addEventListener('input', () => {
    input.setCustomValidity('');
    input.checkValidity();
});

input.addEventListener('invalid', () => {
    input.setCustomValidity('Por favor, debes completar el campo');
});
