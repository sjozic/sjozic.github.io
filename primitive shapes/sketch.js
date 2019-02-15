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
  fill(255);
  rect(55, 55, 55, 55);
}

function keyPressed() {
  fill(random(0,255), random(0, 255), random(0,255));
  if (key === "s") {
    ellipse(random(0, windowWidth), random(0, windowHeight), random(20, 100), random(20, 100));
  }
  if (key === "a") {
    rect(random(0, windowWidth), random(0, windowHeight), random(20, 90), random(20, 90));
  }
  if (key === "d") {
    triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
  }
}

