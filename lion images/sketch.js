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
let pngNum = 0;
let pinNum = 0;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function preload() {
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');
  for (let i = 0; i < 9; i ++){
    pinImages.push(loadImage('assets/pin-0' + pngNum + '.png'));
    pngNum ++;
  }
}



function draw() {
  background(220);
  pinwheel();
  moving();
  imageMode(CENTER);
  lions();
}



function moving(){
  if (mouseX > pmouseX){
    direction = 2;
  }
  else if (mouseX < pmouseX){
    direction = 1;
  }
}



function lions(){
  if (direction === 1){
    image(lionL, mouseX, mouseY, 200, 150);
  }
  else{
    image(lionR, mouseX, mouseY, 200, 150);
  }
}



function pinwheel(){
  image(pinImages[pinNum], width/2, height/2);
  speed = map (mouseX, 0, width, 2, 8);
  if(frameCount % int(speed) === 0){
    pinNum ++;
    if (pinNum > 8){
      pinNum = 0;
    }
  }
}