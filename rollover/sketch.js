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
  
  //mousetracking
  if (mouseX < width/2){
    return true;
  }


  //rectangles
  rectMode(CENTER);
  fill(255);
  rect(width/4, height/4, width/2, height/2);
  rect(width/4, (height-height/4), width/2, height/2);
  rect(width-width/4, height/4, width/2, height/2);
  rect(width-width/4, height-height/4, width/2, height/2);
}
