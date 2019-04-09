// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mountHeightChange = 125;
let start = 0;
let inc = 0.02;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  sky();
  mountains();
  grass();
}



function sky(){
  fill(135, 206, 235);
  rect(0, 0, width, height);  
}



function mountains(){
  beginShape();

  let xOff = start;
  for (let x = 0; x <= width; x++) {
    stroke(100);
    let y = noise(xOff) * height - mountHeightChange;
    rectMode(CORNER);
    rect(x, y, 1, height);
    xOff += inc;
  }
  endShape();
}

function grass(){
  ellipse(0, )
}