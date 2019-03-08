// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let positionX = 0;
let positionY = 0;
let rectSize = 15.75;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  strokeWeight(0);
  colorGrid();
}

function mousePressed(){
  if (mouseButton === LEFT){
    rectSize = rectSize + 0.5;
    colorGrid();
  }
  if (mouseButton === RIGHT){
    rectSize = rectSize - 0.5;
    colorGrid();
  }
  
}

function colorGrid(){
  positionX = 0;
  positionY = 0;
  for (let i = 0; i < width * height; i ++) {

    fill(0, 0, random(255));
    rect(positionX, positionY, rectSize, rectSize);
    positionX = positionX + rectSize;
    if (positionX >= width) {
      positionY = positionY + rectSize;
      positionX = 0;
    }
  }
}

function keyPressed() {
  colorGrid();
}