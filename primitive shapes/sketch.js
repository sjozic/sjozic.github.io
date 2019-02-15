// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let randomMode = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CORNER);
  fill(255);
  rect(10, 10, 150, 55);
  if (randomMode === true) {
    fill(0, 255, 0);
    rect(110, 20, 35, 35);
  }
}

function keyPressed() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  fill(random(0,255), random(0, 255), random(0,255));
  if (key === "s") {
    if (randomMode === false){
      ellipse(mouseX, mouseY, random(20, 100), random(20, 100));  
    }
    else {
      ellipse(random(0, windowWidth), random(0, windowHeight), random(20, 100), random(20, 100));
    }
  }
  if (key === "a") {
    if (randomMode === false) {
      rect(mouseX, mouseY, random(20, 90), random(20, 90));
    }
    else {
      rect(random(0, windowWidth), random(0, windowHeight), random(20, 90), random(20, 90));
    }
  }
  if (key === "d") {
    if (randomMode === false) {
      triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    }
    else {
      triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    }
  }
  if (key === "q") {
    background(255);
  }
  if (key === "e") {
    randomMode = !randomMode;
  }
}

