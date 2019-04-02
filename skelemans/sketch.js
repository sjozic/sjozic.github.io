// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let skeleVert = [];
let skeleR = [];
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
    skeleVert.push(loadImage("assets/skeleton sprites/skeleUpAndIdle/skele-0" + pngNum + ".png"));
    pngNum ++;
  }

  pngNum = 1;

  for (let i = 1; i < 4; i++) {
    skeleR.push(loadImage("assets/skeleton sprites/skeleR/skeleR-0" + pngNum + ".png"));
    pngNum ++;
  }
}

function draw() {
  background(0);
  keyPressed();
}


function keyPressed(){
  if (keyIsPressed && keyCode === UP_ARROW){
    skeleY = skeleY - 1;
    skeletonVerticleAnim();
  }

  else if (keyIsPressed && keyCode === DOWN_ARROW){
    skeleY = skeleY + 1;
    skeletonVerticleAnim();
  }

  else if (keyIsPressed && keyCode === RIGHT_ARROW){
    skeleX = skeleX + 1;
    skeletonRightAnim();
  }

  else {
    skeleStill();
  }
}


function skeletonVerticleAnim() {
  image(skeleVert[currentSkele], skeleX, skeleY);
  if (frameCount % 5 === 0){
    currentSkele ++;
    print(currentSkele);
  }
  if (currentSkele >= 3) {
    currentSkele = 0;
  }
}


function skeletonRightAnim() {
  image(skeleR[currentSkele], skeleX, skeleY);
  if (frameCount % 5 === 0){
    currentSkele ++;
    print(currentSkele);
  }
  if (currentSkele >= 3) {
    currentSkele = 0;
  }
}


function skeleStill() {
  image(skeleVert[currentSkele], skeleX, skeleY);
  if (frameCount % 20 === 0) {
    currentSkele ++;
  }
  if (currentSkele >= 2) {
    currentSkele = 0;
  }
}
