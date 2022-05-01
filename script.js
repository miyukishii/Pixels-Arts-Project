const pixelBoard = document.querySelector("#pixel-board");
const paleteColor = document.querySelectorAll(".color");
const clearButton = document.querySelector("#clear-board");
paleteColor[0].style.background = "black";
paleteColor[1].style.background = "yellow";
paleteColor[2].style.background = "red";
paleteColor[3].style.background = "blue";

function createPixel(size) {
  for( let index = 0; index < size*size; index += 1) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixelBoard.appendChild(pixel);
  }
}
createPixel(5);

window.onload = blackSelected

function blackSelected() {
  paleteColor[0].classList.add("selected");
}
  
function changeSelect(event) {
  const currentSelected = document.querySelector(".selected");
  currentSelected.classList.remove("selected");
  event.target.classList.add("selected");
}
for(let colors of paleteColor) {
  colors.addEventListener("click", changeSelect);
}

const allPixels = document.querySelectorAll(".pixel");

function changeColorOfPixel(event) {
  const colorSelected = document.querySelector(".selected");
  event.target.style.background = colorSelected.style.background;
}

for(let pixel of allPixels) {
  pixel.addEventListener("click", changeColorOfPixel);
}

function clearBoard () {
  for(let pixel of allPixels) {
  pixel.style.background = "white";
  }
}
clearButton.addEventListener("click", clearBoard);


  


