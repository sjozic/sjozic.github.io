// Project Title
// Your Name
// Date
//
// Extra for Experts:1
// - describe what you did to take this project "above and beyond"


let rectWidth = 5;
let rectHeight = 25;
let colors = ["#D3BE7C", "#CDA185", "#C8848E", "#C26796", "#BC4A9F"];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawRowCustom(yPos) {
  colorMode(RGB);
  let counter = 1;
  for (let x = 0; x < width; x += rectWidth) {
    fill(colors[int(random(colors.length))]);
    rect(x, yPos, rectWidth, rectHeight);
    counter ++;
  }
}

function drawRowRGB(yPos) {
  colorMode(RGB);
  for (let x = 0; x < width; x += rectWidth) {
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowHSB(yPos) {
  colorMode(HSB);
  for (let x = 0; x < width; x += rectWidth) {
    fill(x % 360, 255, 255);
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function draw() {
  drawRowRGB(height * 0.2);
  drawRowHSB(height * 0.5);
  drawRowCustom(height *0.8);
}