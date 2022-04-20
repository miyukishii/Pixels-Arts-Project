function createDiv () {
    let pixelsDiv = document.querySelector("#pixel-board");
    let pixelLine = document.createElement("div");
    pixelLine.className = "pixel";
    pixelsDiv.appendChild(pixelLine);
}
createDiv();
// pixelLine.className = "pixel line";
//     for (index = 0; index < pixelsDiv.length; index += 1) {
//         pixelsDiv[index].appendChild(pixelLine);
//     }
