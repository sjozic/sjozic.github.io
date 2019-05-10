// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colors = ["#D3BE7C", "#CDA185", "#C8848E", "#C26796", "#BC4A9F"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  noLoop();
}

function draw() {
  background(0);
  //circles(width/2, height/2, height);
  rectums(width/2, height/2, height*0.6);
}

function circles(x, y, d){
  if (d > 5){
    noFill();
    ellipse(x, y, d, d);
    circles(x-d/2, y, d/1.3);
    circles(x+d/2, y, d/1.3);
  }
}

function rectums(x, y, sideLength){
  if (sideLength > 5){
    let half = sideLength/2;
    fill(random(255), 0, random(255), 200);
    rect(x, y, sideLength, sideLength);
    rectums(x-half, y-half, half);
    rectums(x-half, y+half, half);
    rectums(x+half, y+half, half);
    rectums(x+half, y-half, half);
  }
}