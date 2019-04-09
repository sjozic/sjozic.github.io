// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let squareSize = 15;

function setup() {
  noFill();
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop();
}


function drawRectangles() {
  for (let x = squareSize / 2; x < width - squareSize / 2; x += squareSize) {
    for (let y = squareSize / 2; y < height - squareSize / 2; y += squareSize) {
      push();
      translate(x, y);
      let rotAmount = map(y, 0, height, 0 , 75);
      rotate(radians(random(-rotAmount, rotAmount)));
      let offset = map(y, 0, height, 0, 15);
      rect(-offset, offset, squareSize, squareSize);
      pop();
    }
  }
}

function draw() {
  background(220);
  drawRectangles();
}
