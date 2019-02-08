// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 100, 100);
  fill(200, 200, 200);
  ellipse(650, 400, 200, 55);
  ellipse(950, 400, 200, 55);
  noFill();
  arc(800, 55, 60, 60, HALF_PI, PI);
  fill(0, 0, 0);
  ellipse(650, 400, 55, 55);
  ellipse(950, 400, 55, 55);
  
}
