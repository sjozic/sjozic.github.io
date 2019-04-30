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
  createCanvas(3000, 4500);
  noLoop();
  stroke(0.01);
  noFill();
}

function draw() {
  colorMode(HSB);
  //background(0);
  for (yRange = 0; yRange < height; yRange ++){
    for (xRange = 0; xRange < width; xRange ++){
      //fill(colors[int(random(colors.length))]);
      push();
      translate(random(xRange, xRange*20), random(yRange, height));
      rect(0, 0, random(10),random(50));
      pop();
    }
  }
}

function mouseClicked(){
    save();
}