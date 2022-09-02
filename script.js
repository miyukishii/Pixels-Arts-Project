const pixelBoard = document.querySelector('#pixel-board');
const paleteColor = document.querySelectorAll('.color');
const clearButton = document.querySelector('#clear-board');
const generateButton = document.querySelector('#generate-board');

// Definir a primeira cor da paleta com a cor preta, com a classe 'selected'

paleteColor[0].style.background = 'black';

function blackSelected() {
  paleteColor[0].classList.add('selected');
}

// Para gerar cor randomicamente foi utilizado o código do site https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/ //

function generateRandomPalete() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function chooseColorOfPalete() {
  for (let aux = 1; aux < paleteColor.length; aux += 1) {
    paleteColor[aux].style.background = generateRandomPalete();
  }
}
chooseColorOfPalete();

// Criar um quadro default com 5 pixels de Altura e Largura//

function createPixel(size) {
  for (let index = 0; index < size * size; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
  pixelBoard.style.width = `${size * 45}px`;
  pixelBoard.style.height = `${size * 45}px`;
}

// Adicionando evento de click em cada cor da paleta para selecionar cor//

function changeSelect() {
  paleteColor.forEach((color) => (
    color.addEventListener('click', () => (
      paleteColor.forEach((item) => (
        item !== color ? item.classList.remove('selected') : item.classList.toggle('selected')
      ))
    ))));
}
changeSelect();

// Pintando o pixel com a cor selecionada//

function colorPixel() {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => (
    pixel.addEventListener('click', (e) => {
      const colorSelected = document.querySelector('.selected');
      e.target.style.background = colorSelected.style.background;
    })));
}

// Adicionando evento no botão de Limpar//

clearButton.addEventListener('click', () => {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => (
    pixel.style.background = 'white'));
});

// Adicionando botão de redefinir tamanho do board//

function boardGenerator() {
  const input = document.querySelector('input').value;
  if (input < 5 || input > 50) {
    alert('Board inválido!');
  } else {
    pixelBoard.innerHTML = '';
    createPixel(input);
  }
}

generateButton.addEventListener('click', boardGenerator);

window.onload = () => {
  blackSelected();
  createPixel(5);
  colorPixel();
};
