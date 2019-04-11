// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xRange;
let yRange;
let colors = ["#D3BE7C", "#CDA185", "#C8848E", "#C26796", "#BC4A9F", "#C9A918", "#1E4CFE", "#FE44C3", "#85FEA3", "#3E764C"];


function setup() {
  createCanvas(windowWidth, windowHeight+5);
  noLoop();
  stroke(0.01);
}

function draw() {
  colorMode(HSB);
  background(0);
  for (yRange = 0; yRange < height; yRange ++){
    for (xRange = 0; xRange < width; xRange ++){
      fill(colors[int(random(colors.length))]);
      rect(random(0, xRange), yRange, random(10),random(50));
    }
  }
}