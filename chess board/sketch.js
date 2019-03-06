// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let positionX = 0;
let positionY = 0;
let color = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

  for (let i = 0; i < width; i ++) {

    if (color === true) {
      color = (255);
    }
    else {
      color = (0);
    }
    fill(color);
    color = !color;
    rect(positionX, positionY, 20, 20);
    positionX = positionX + 20;
    if (positionX === width) {
      positionY = positionY + 20;
      positionX = 0;
    }
  }
}
