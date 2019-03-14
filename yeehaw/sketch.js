// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let start = 0;
let inc = 0.002;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
  noStroke();
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xOff = start;
  let x = 0;
  for (let x = 0; x <= width; x++) {
    stroke(255);
    let y = noise(xOff) * height;
    vertex(x, y);
  
    xOff += inc;
  }
  endShape();
  

  start += inc;
}


function generateTerrain() {

  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xOff = start;
  let x = 0;
  for (let x = 0; x <= width; x++) {
    stroke(255);
    let y = noise(xOff) * height;
    vertex(x, y);

    xOff += inc;
  }
  endShape();

  start += inc;
}
  
