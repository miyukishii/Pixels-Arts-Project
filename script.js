const pixelBoard = document.querySelector('#pixel-board');
const paleteColor = document.querySelectorAll('.color');

paleteColor[0].style.background = 'black';
paleteColor[1].style.background = 'yellow';
paleteColor[2].style.background = 'red';
paleteColor[3].style.background = 'blue';

function blackSelected() {
  paleteColor[0].classList.add('selected');
}

window.onload = blackSelected;

function createPixel(size) {
  for (let index = 0; index < size * size; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
createPixel(5);

function changeSelect(event) {
  const currentSelected = document.querySelector('.selected');
  currentSelected.classList.remove('selected');
  event.target.classList.add('selected'); 
}

for (let colors of paleteColor) {
  colors.addEventListener('click', changeSelect);
}

function changeColorOfPixel(event) {
  const colorSelected = document.querySelector('.selected');
  event.target.style.background = colorSelected.style.background;
}

const allPixels = document.querySelectorAll('.pixel');

for (let pixel of allPixels) {
  pixel.addEventListener('click', changeColorOfPixel);
}

const clearButton = document.querySelector('#clear-board');

function clearBoard () {
  for (let pixel of allPixels) {
    pixel.style.background = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

const generateButton = document.querySelector('#generate-board');

generateButton.addEventListener('click', function generateBoard() {
  const input = document.querySelector('input').value;
  console.log(input);
    if (input < 5) {
    alert('Board inválido!');
    pixelBoard.innerHTML = "";
      for (let pixels = 0; pixels < 5 * 5; pixels += 1) {
        const newDivPixel = document.createElement('div');
        newDivPixel.className = 'pixel';
        newDivPixel.addEventListener('click',changeColorOfPixel);
        pixelBoard.appendChild(newDivPixel);
      }
    } else if (input > 50) {
    alert('Board inválido!');
    pixelBoard.innerHTML = "";
      for (let pixels = 0; pixels < 50 * 50; pixels += 1) {
        const newDivPixel = document.createElement('div');
        newDivPixel.className = 'pixel';
        newDivPixel.addEventListener('click',changeColorOfPixel);
        pixelBoard.appendChild(newDivPixel);
      }
    } else {
      pixelBoard.innerHTML = "";
      for (let pixels = 0; pixels < input * input; pixels += 1) {
        const newDivPixel = document.createElement('div');
        newDivPixel.className = 'pixel';
        newDivPixel.addEventListener('click',changeColorOfPixel);
        pixelBoard.appendChild(newDivPixel);
      }
    }
});


 