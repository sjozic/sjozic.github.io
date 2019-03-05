// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fillA, fillB, fillC;
let sizeA, sizeB;
let radio;
let picker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fillA = createSlider(0, 255, 100);
  fillA.position(10, 10);
  fillA.style('width', '80px');

  fillB = createSlider(0, 255, 100);
  fillB.position(10, 50);
  fillB.style('width', '80px');

  fillC = createSlider(0, 255, 100);
  fillC.position(10, 90);
  fillC.style('width', '80px');


  sizeA = createSlider(5, 255, 100);
  sizeA.position(100, 10);
  sizeA.style('width', '80px');

  sizeB = createSlider(5, 255, 100);
  sizeB.position(100, 50);
  sizeB.style('width', '80px');

  radio = createRadio();
  radio.option('square');
  radio.option('ellipse');
  radio.position(190, 10);
  print(radio.value());

  picker = createColorPicker();
  picker.position(10, 125)
}

function draw() {
  background(0);

  rectMode(CENTER);

  
  fill(fillA.value(), fillB.value(), fillC.value());

  if (radio.value() === 'square'){
    rect(width/2, height-height/4, sizeA.value(), sizeB.value());
  }
  else {
    ellipse(width/2, height-height/4, sizeA.value(), sizeB.value());
  }
}
