// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let hue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}

function draw() {

  background(230);
  fill(hue, 255, 255);
  push();
  boxTime();
  pop();
  hue += 1;
  print(hue);
  if (hue > 355) hue = 0;
}


function boxTime(){
  for (i = 0; i < 20; i ++){
    push(); 
    rotateY(radians(frameCount));
    rotateX(radians(frameCount));
    box(20);
    pop();
    translate(30, 0);
  }
}