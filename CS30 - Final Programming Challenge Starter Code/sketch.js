// CS30 - Final Programming Challenge
// Complete this comment header - - - (it's being graded!)
//Simon Jozic
//6/19/2019


//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction
let foxX = 0;
let foxY = 0;
let currentSprite = 0;
let scaleNum = 1;
let pepsiModeToggle = false;
let speed = 2;

function preload() {
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(foxX, foxY);
  scale(scaleNum);
  pepsiMode();
  moveFox();
  drawFox(foxX, foxY);
}


function loadStatic() {
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}


function loadAnimation() {
  for (let i = 1; i <= 8; i++) {    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"))
  }
}


//DRAW THE FOX
function drawFox(foxX, foxY) {
  image(animationImages[currentSprite], 0, 0);
}


//MOVE THE FOX
function moveFox() {
  if (keyIsPressed === true) {
    //UP
    if (key === 'w') {
      if (currentSprite <= 16 || currentSprite > 22) {
        currentSprite = 16;
      }
      if (frameCount % 5 === 0) {
        currentSprite++;
      }
      foxY -= speed;
    }


    //LEFT
    if (key === 'a') {
      if (currentSprite <= 0 || currentSprite > 6) {
        currentSprite = 0;
      }
      if (frameCount % 5 === 0) {
        currentSprite++;
      }
      foxX -= speed;
    }


    //DOWN
    if (key === 's') {
      if (currentSprite <= 24 || currentSprite > 30) {
        currentSprite = 24;
      }
      if (frameCount % 5 === 0) {
        currentSprite++;
      }
      foxY += speed;
    }


    //RIGHT
    if (key === 'd') {
      if (currentSprite <= 8 || currentSprite > 14) {
        currentSprite = 8;
      }
      if (frameCount % 5 === 0) {
        currentSprite++;
      }
      foxX += speed;
    }
  }
}


//PEPSI MODE TOGGLE
function keyPressed(){
  if (key === 'p'){
    pepsiModeToggle = !pepsiModeToggle;
  }
}

//RESIZE
function mousePressed() {
  if (mouseY > foxX) {
    scaleNum += 0.2;
  }
  else {
    scaleNum -= 0.2;
  }
}


//PEPSI MODE FUNCTION
function pepsiMode(){
  noTint();
  speed = 2;
  if (pepsiModeToggle === true){
    speed = 4;
    scaleNum = random(0.75, 2);
    tint(random(255), random(255), random(255));
  }
}