// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function eyes() {
  let left_eye = 650;
  if(mouseX < 650) {
    left_eye = mouseX;
  }

  function draw() {
    eyes();
    background(100, 100, 100);
    fill(200, 200, 200);
    ellipse(650, 400, 200, 55);
    ellipse(950, 400, 200, 55);
    fill(0, 0, 0);
    ellipse(left_eye, 400, 55, 55);
    ellipse(950, 400, 55, 55);
  
  }

}
