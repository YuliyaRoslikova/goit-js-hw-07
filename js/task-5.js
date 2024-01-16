const btnElem = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const body = document.body;

btnElem.addEventListener('click', onButtonClick);

function onButtonClick () {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
