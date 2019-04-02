// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//define variables
let rectX,rectY,changeX,changeY;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //set variables
  rectX=200; rectY=300; changeX=random(3,8); changeY=random(3,8);
}


function draw() {
  rectMovement();
  background(80,80,80);

  //draw rect
  rect(rectX,rectY,250,75);
}


function rectMovement(){

  //change position
  rectX+=changeX; rectY+=changeY;
  

  //edge bounce
  if (rectY>=height-75||rectY<=0) {
    changeY=changeY*-1;
  }

  if (rectX>=width-250||rectX<=0) {
    changeX=changeX*-1;
  }
}
