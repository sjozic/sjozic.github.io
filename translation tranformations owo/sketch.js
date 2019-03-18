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
  strokeWeight(1);
  ellipse(width/2, height/2, 400, 400);

  push();
  translate(width/2, height/2);

  rectMode(CENTER);
  strokeWeight(2);
  for (let i = 0; i < 60; i++){
    rect(0, -170, 1, 40);
    rotate(radians(30));
  }
  for (let i = 0; i < 60; i++){
    rect(0, -170, 1, 40);
    rotate(radians(30));
  }
}