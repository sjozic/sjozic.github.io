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
  fill(0, 255, 0);
  line(n, 0, n, height);
}
