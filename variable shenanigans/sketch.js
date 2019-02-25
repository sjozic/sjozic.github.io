// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX, buttonY, buttonSize;
let rectX, rectY, rectW, rectH, rectShade;
let fadeIn = false;
let buttonOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //ellipse variables
  buttonX = width/2;
  buttonY = height/4;
  buttonSize = 50;
  ellipseMode(CENTER);

  //rect variables
  rectX = width/2;
  rectY = height*0.6;
  rectW = width/2;
  rectH = height*0.4;
  rectShade = 0;
  noStroke();
  rectMode(CENTER);
}


function mouseDistance(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return c;
}


function mousePressed(){
  if (buttonOver){
    fadeIn = !fadeIn;
  }
}


function draw() {
  background(255);
  print (mouseDistance(mouseX, mouseY, buttonX, buttonY));


  //draw ellipse
  if (mouseDistance(mouseX,mouseY,buttonX,buttonY)<buttonSize/2){
    fill(200, 40, 50);
    buttonOver = true;
  }
  else {
    fill(0, 0, 0);
    buttonOver = false;
  }
  ellipse(buttonX, buttonY, buttonSize, buttonSize);


  //draw rectangle
  if (fadeIn === true){
    rectShade -= 2;
    fill(rectShade);
  }
  else {
    rectShade += 2;
    fill(rectShade);
    rect(rectX, rectY, rectW, rectH);
  }
}