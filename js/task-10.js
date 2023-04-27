const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {

  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement('div');
    elem.style.width = `${10 * i + 30}px`;
    elem.style.height = `${10 * i + 30}px`;
    elem.style.backgroundColor = getRandomHexColor();
    boxes.append(elem);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}