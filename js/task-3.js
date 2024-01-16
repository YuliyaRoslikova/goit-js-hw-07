const inputElem = document.querySelector('input#name-input');
const outputElem = document.querySelector('span#name-output');

inputElem.addEventListener('input', onInputUpdate);

function onInputUpdate() {  
    outputElem.textContent = inputElem.value.trim() === '' 
        ? 'Anonymous' 
        : inputElem.value;
}
