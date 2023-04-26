const currentValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    currentValue.textContent = counterValue;
});