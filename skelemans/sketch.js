// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let skeleUp = [];
let pngNum = 1;
let currentSkele = 0; 
let speed;
let skeleX = 100;
let skeleY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function preload() {
  for (let i = 0; i < 3; i ++) {
    skeleUp.push(loadImage("assets/skeleton sprites/skele-0" + pngNum + ".png"));
    pngNum ++;
  }
}

function draw() {
  scale(2);
  background(0);
  keyPressed();
}


function keyPressed(){
  if (keyIsPressed && keyCode === UP_ARROW){
    skeleY = skeleY - 1;
    skeletonUpAnim();
  }

  else if (keyIsPressed && keyCode === DOWN_ARROW){
    skeleY = skeleY + 1;
    skeletonUpAnim();
  }
  else {
    skeleStill();
    skeleY = skeleY;
    skeleX = skeleX;
  }
}


function skeletonUpAnim() {
  image(skeleUp[currentSkele], skeleX, skeleY)
  if (frameCount % 4 === 0){
    currentSkele ++;
    print(currentSkele);
  }
  if (currentSkele >= 3) {
    currentSkele = 0;
  }
}

function skeleStill() {
  image(skeleUp[0], skeleX, skeleY)
}
