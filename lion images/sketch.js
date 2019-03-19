// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let direction = 1;
  //1 = left
  //2 = right
let pinImages = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function preload() {
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');
  pinImages.push(loadImage('assets/pin-00.png'));
}

function draw() {
  background(220);
  image(pinImages[0], width/2, height/2);

  moving();
  imageMode(CENTER);

  if (direction === 1){
    image(lionL, mouseX, mouseY, 200, 150);
  }
  else{
    image(lionR, mouseX, mouseY, 200, 150);
  }
}

function moving(){
  if (mouseX > pmouseX){
    direction = 2;
  }
  else if (mouseX < pmouseX){
    direction = 1;
  }
}