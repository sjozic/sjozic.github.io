// CS30 - Final Programming Challenge
// Complete this comment header - - - (it's being graded!)
//
//
//
//
//

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction



function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom


}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(staticImages[0],width/2,height/2);  
}


function loadStatic(){
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

function loadAnimation(){
  for(let i = 1; i <= 8; i++){    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"))
  }

  for(let i = 1; i <= 8; i++){  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"))
  }

  for(let i = 1; i <= 8; i++){  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"))
  }

  for(let i = 1; i <= 8; i++){  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"))
  }
}