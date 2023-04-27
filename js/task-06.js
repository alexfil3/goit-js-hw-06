const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const expectedLength = input.dataset.length;
    const actualLength = input.value.trim().length;

    actualLength === parseInt(expectedLength) ? addValidClass(input) : addInvalidClass(input)
});

const addValidClass = input => {
    input.classList.remove('invalid');
    input.classList.add('valid');
};

const addInvalidClass = input => {
    input.classList.remove('valid');
    input.classList.add('invalid');
}