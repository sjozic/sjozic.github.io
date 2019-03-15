// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let start = 0;
let inc = 0.02;
let scrolling = true;
let incChanger;
let speedMult;
let flagY = 0;
let flagx = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  incChanger = createSlider(1, 300, 0.01);
  incChanger.position(10, 10);
  incChanger.style('width', '100px');

  speedMult = createSlider(1, 50, 0.01);
  speedMult.position(10, 50);
  speedMult.style('width', '100px');


  
}

function draw() {

  inc = incChanger.value() / 1000;

  background(51);
  beginShape();
  let xOff = start;
  let x = 0;
  for (let x = 0; x <= width; x++) {
    stroke(noise(xOff)*255, noise(xOff), noise(xOff));
    let y = noise(xOff) * height;
    rectMode(CORNER);
    rect(x, y, 1, height);

    xOff += inc;
  }
  endShape();


  if (scrolling === true){
    start += inc*speedMult.value();
  }
  else if(scrolling === false) {
    //
  }


  
}

function keyPressed(){
  if (key === 's') {
    scrolling = !scrolling;
  }
}