// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

let moveX = 0.0;

function draw() {
  background(204);
  moveX = moveX + 0.01;
  let n = noise(moveX) * width;
  fill(n, 0, 0);
  rect(50, 50, 50, 50);
}
