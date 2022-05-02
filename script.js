const pixelBoard = document.querySelector('#pixel-board');
const paleteColor = document.querySelectorAll('.color');

paleteColor[0].style.background = 'black';

function blackSelected() {
  paleteColor[0].classList.add('selected');
}

window.onload = blackSelected;

// Para gerar cor randomicamente foi utilizado o código do site https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/ //

function generateRandomPalete() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;  
}

function defineColorOfPalete () {
  for (let aux = 1; aux < paleteColor.length; aux += 1) {
    paleteColor[aux].style.background = generateRandomPalete();
  }
}
defineColorOfPalete();

// Criar um quadro com 5 pixels de Altura e Largura//

function createPixel(size) {
  for (let index = 0; index < size * size; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
createPixel(5);

// Adicionando evento de click em cada cor da paleta para selecionar cor//

function changeSelect(event) {
  const currentSelected = document.querySelector('.selected');
  currentSelected.classList.remove('selected');
  event.target.classList.add('selected'); 
}

for (let colors of paleteColor) {
  colors.addEventListener('click', changeSelect);
}

// Pintando o pixel com a cor selecionada//

function changeColorOfPixel(event) {
  const colorSelected = document.querySelector('.selected');
  event.target.style.background = colorSelected.style.background;
}

const allPixels = document.querySelectorAll('.pixel');

for (let pixel of allPixels) {
  pixel.addEventListener('click', changeColorOfPixel);
}

// Adicionando evento no botão de Limpar//

const clearButton = document.querySelector('#clear-board');

function clearBoard () {
  for (let pixel of allPixels) {
    pixel.style.background = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

// Adicionando botão de redefinir tamanho do board//

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


 