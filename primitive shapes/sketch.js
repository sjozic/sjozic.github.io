// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let randomMode = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {

  //top left info box
  rectMode(CORNER);
  textFont("Arial");
  fill(255);
  rect(10, 10, 150, 55);
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(25);
  text("Simon J", 15, 42.5);

  //random mode indicator
  if (randomMode === true) {
    
    fill(random(0, 255), random(0, 255), random(0, 255));
    triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    rect(random(0, windowWidth), random(0, windowHeight), random(20, 90), random(20, 90));
    ellipse(random(0, windowWidth), random(0, windowHeight), random(20, 100), random(20, 100));
    
    
    fill(0, 255, 0);
    rect(110, 20, 35, 35);
    fill(0);
    textSize(9);
    text("Random", 110, 40);
  }
}


//shapes by key press
function keyPressed() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  fill(random(0,255), random(0, 255), random(0,255));
  
  
  //ellipses
  if (key === "s") {
    if (randomMode === false){
      ellipse(mouseX, mouseY, random(20, 100), random(20, 100));  
    }
  }


  //rectangles
  if (key === "a") {
    if (randomMode === false) {
      rect(mouseX, mouseY, random(20, 90), random(20, 90));
    }
  }


  //triangles
  if (key === "d") {
    if (randomMode === false) {
      triangle(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    }
  }


  //clear
  if (keyCode === 32) {
    background(255);
  }


  //random mode switch
  if (key === "e") {
    randomMode = !randomMode;
  }
}

