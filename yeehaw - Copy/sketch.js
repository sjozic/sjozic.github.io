// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lineX = 0;
let lineY = 50;

function setup() {
  background(240)
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill (0);
  noStroke();
  rect(lineX, height - lineY, 1, lineY);
  lineX = lineX + 1;
  lineY = random(height);
}
