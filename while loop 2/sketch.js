// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function drawTargetWhile(){
  let diameter = 50;
  let counter = 0;
  let color = true;
  while (counter < 6){
    if (color === true){
      fill(255, 0, 0);
    }
    else {
      fill(0);
    }
    ellipse(width-width/4, height/2, diameter, diameter);
    diameter = diameter - 50;
    color = !color;
    counter ++;
  }
}

//-----------------------------

function drawTargetFor(){ 
  for (let i = 200; i > 0; i--){
    if (color === true){
      fill(0);
    }
    else {
      fill(255);
    }
    ellipse(width/2, height/2, i*50, i*50);
    color = !color;
  }
}

//-----------------------------

function draw() {
  background(240);
  drawTargetWhile();
  drawTargetFor();
}
