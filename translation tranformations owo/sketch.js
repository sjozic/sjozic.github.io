// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentRotation = 0();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(1);
  
  //draw clock-----------------------------
  fill(220);
  rect(width/2 - 27, height/2-250, 50, 400);
  rect(width/2-52, height/2-250, 100, 25);

  ellipse(width/2, height/2, 400, 400);

  fill(255);
  ellipse(width/2, height/2, 375, 375);
  //--------------------------------------


  //draw minutes -------------------------
  push();
  translate(width/2, height/2);

  fill(0);
  rectMode(CENTER);
  strokeWeight(2);

  for (let i = 0; i < 12; i++){
    rect(0, -160, 3, 40);
    rotate(radians(30));
  }

  for (let i = 0; i < 60; i++){
    rect(0, -165, 0.2, 30);
    rotate(radians(6));
  }

  pop();
  //------------------------------------


  //draw hands--------------------------
  push();
  translate(width/2, height/2);

  fill(245);
  rect(-2.5, -185, 4, 185);
  rotate(radians(1));
  pop();  
}