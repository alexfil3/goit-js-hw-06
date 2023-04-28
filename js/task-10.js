const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const elements = createBoxes(input.value);
  boxes.append(...elements)
});
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elements = []; 

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement('div');
    elem.style.width = `${10 * i + 30}px`;
    elem.style.height = `${10 * i + 30}px`;
    elem.style.backgroundColor = getRandomHexColor();
    elements.push(elem);
  }

  return elements
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}