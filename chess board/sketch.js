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
  colorGrid();
}

function mousePressed(){
  if (mouseButton === LEFT){
    rectSize = rectSize + 0.5;
    colorGrid();
  }
  if (mouseButton === RIGHT){
    print('oof');
    rectSize = rectSize - 0.5;
    colorGrid();
  }
  
}

function colorGrid(){
  positionX = 0;
  positionY = 0;
  for (let i = 0; i < width; i ++) {

    fill(random(255), random(255), random(255));
    rect(positionX, positionY, rectSize, rectSize);
    positionX = positionX + rectSize;
    if (positionX >= width) {
      positionY = positionY + rectSize;
      positionX = 0;
    }
  }
}