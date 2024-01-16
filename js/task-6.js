const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', onCreateBoxes);
destroyButton.addEventListener('click', onDestroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    const side = `${30 + 10 * i}px`;
    box.style.width = side;
    box.style.height = side;
    boxesContainer.appendChild(box);
  }
}
  
function onDestroyBoxes() {
  boxesContainer.innerHTML = '';
  input.value = '';
}
  
function onCreateBoxes() {
  const inputValue = Number(input.value)
  if (inputValue < 1 || inputValue > 100) {
    alert('Input value is wrong');
    return;
  }
  
  createBoxes(inputValue);
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
