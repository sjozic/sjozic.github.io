// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y = 0;
let lengthSwap;
let on = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function hnggg() {
  x = random(width);
  y = random(height);

  lengthSwap = int(random(1, 4));
  if (on === true) {
    if (dist(x, y, width / 2, height / 2) < 200) {
      fill(random(255), random(255), random(255));
      if (lengthSwap === 1) {
        rect(x, y, random(5, 20), 5);
      }
      else if (lengthSwap === 2) {
        rect(x, y, 5, random(5, 20));
      }
      else {
        rect(x, y, 5, 5);
      }
    }
  }
}

function mouseClicked() {
  on = !on;
}

function draw() {
  //background(220);
  hnggg();
  print(on);
}
