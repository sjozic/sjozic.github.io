// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fadeIn;
let quadrant;

let fill1 = (0);
let fill2 = (0);
let fill3 = (0);
let fill4 = (0);

function setup() {
  createCanvas(windowWidth, windowHeight);
}



//mouse tracking function-----------------
function determineQuadrant() {
  if (mouseX < width/2) {//left side
    if (mouseY < height/2) {//top side
      quadrant = 1;
    }
    else{
      quadrant = 2;
    }
  }
  else{
    if (mouseY < height/2){
      quadrant = 3;
    }
    else {
      quadrant = 4;
    } 
  }
}
//-----------------------------------------
function fillChange(){

  //QUADRANT 1
  if(quadrant === 1) {
    if(fill1 < 255){
      fill1 = fill1 += 5;
      }
    }
  else {
    if (fill1 > 0){
    fill1 = fill1 -= 5;
    }
  }

  //QUADRANT 2
  if(quadrant === 2) {
    if(fill2 < 255){
      fill2 = fill2 += 5;
      }
    }
  else {
    if (fill2 > 0){
    fill2 = fill2 -= 5;
      }
    }

  //QUADRANT 3
  if(quadrant === 3) {
    if(fill3 < 255){
      fill3 = fill3 += 5;
      }
    }
  else {
    if (fill3 > 0){
    fill3 = fill3 -= 5;
      }
    }

  //QUADRANT 4
  if(quadrant === 4) {
    if(fill4 < 255){
      fill4 = fill4 += 5;
      }
    }
  else {
    if (fill4 > 0){
    fill4 = fill4 -= 5;
      }
    }

  }
//-----------------------------------------
function drawSquares(){
  rectMode(CENTER);
  noStroke();

  fillChange();
  fill(fill1);
  rect(width/4, height/4, width/2, height/2);

  fill(fill2);
  rect(width/4, (height-height/4), width/2, height/2);

  fill (fill3);
  rect(width-width/4, height/4, width/2, height/2);

  fill (fill4);
  rect(width-width/4, height-height/4, width/2, height/2);
}
//-----------------------------------------



function draw() {
  determineQuadrant();
  drawSquares();
}