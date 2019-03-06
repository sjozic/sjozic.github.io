// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
        if (x % 4 === 0 || y % 2) {
        stroke(random(255), random(255), random(255));
        point(x, y);
      }
    }
  }
}
