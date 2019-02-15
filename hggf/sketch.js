// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
}

function draw() {
  //background(225)
  fill(random(255), random(255), random(255));
  ellipse(x, y, 25, 25);
  x += xSpeed;
  y += ySpeed;
  print(mouseX);
}

function mousePressed() {
  fill(500, 0, 0);
  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
}

function mouseReleased() {
  fill (0, 0, 500);
}

