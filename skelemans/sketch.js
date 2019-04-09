// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let skeleVert = [];
let skeleR = [];
let skeleIdle = [];
let pngNum = 1;
let currentSkele = 0;
let skeleX = 100;
let skeleY = 100;
let reverse = false;
let lock = false;
let skeleL = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function preload() {
  for (let i = 0; i < 3; i++) {
    skeleVert.push(loadImage("assets/skeleton sprites/skeleUpAndDown/skele-0" + pngNum + ".png"));
    pngNum++;
  }

  pngNum = 1;

  for (let i = 1; i < 4; i++) {
    skeleR.push(loadImage("assets/skeleton sprites/skeleR/skeleR-0" + pngNum + ".png"));
    pngNum++;
  }

  pngNum = 1;

  for (let i = 1; i < 8; i++) {
    skeleIdle.push(loadImage("assets/skeleton sprites/skeleIdle/skele-0" + pngNum + ".png"));
    pngNum++;
  }

  pngNum = 1;

  for (let i = 1; i < 4; i++) {
    skeleL.push(loadImage("assets/skeleton sprites/skeleL/skeleL-0" + pngNum + ".png"));
    pngNum++;
  }

}

function draw() {
  background(0);
  keyPressed();
}


function keyPressed() {
  if (keyIsPressed && keyCode === UP_ARROW) {
    skeleY = skeleY - 1;
    skeletonVerticleAnim();
  }

  else if (keyIsPressed && keyCode === DOWN_ARROW) {
    skeleY = skeleY + 1;
    skeletonVerticleAnim();
  }

  else if (keyIsPressed && keyCode === RIGHT_ARROW) {
    skeleX = skeleX + 1;
    skeletonRightAnim();
  }

  else if (keyIsPressed && keyCode === LEFT_ARROW) {
    skeleX = skeleX - 1;
    skeletonLeftAnim();
  }

  else {
    skeleStill();
  }
}


function skeletonVerticleAnim() {

  if (currentSkele >= 3) {
    currentSkele = 0;
  }

  image(skeleVert[currentSkele], skeleX, skeleY);
  if (frameCount % 5 === 0) {
    currentSkele++;
    print(currentSkele);
  }
  if (currentSkele >= 3) {
    currentSkele = 0;
  }
}


function skeletonRightAnim() {

  if (currentSkele >= 3) {
    currentSkele = 0;
  }

  print(currentSkele);
  image(skeleR[currentSkele], skeleX, skeleY);

  if (frameCount % 5 === 0) {
    currentSkele++;
  }
  if (currentSkele >= 3) {
    currentSkele = 0;
  }
}



function skeleStill() {

  image(skeleIdle[currentSkele], skeleX, skeleY);

  if (reverse === false) {
    if (frameCount % 20 === 0) {
      print(currentSkele);
      currentSkele++;
    }
    if (currentSkele > 6) {
      reverse = !reverse;
    }
  }

  if (reverse === true) {
    if (frameCount % 20 === 0) {
      currentSkele--;
    }
    if (currentSkele <= 1) {
      reverse = !reverse;
    }
  }

}

function skeletonLeftAnim(){

  if (currentSkele >= 3) {
    currentSkele = 0;
  }

  print(currentSkele);
  image(skeleL[currentSkele], skeleX, skeleY);

  if (frameCount % 5 === 0) {
    currentSkele++;
  }
  if (currentSkele >= 3) {
    currentSkele = 0;
  }
}