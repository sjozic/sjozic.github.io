// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
  noStroke();
}

function draw() {

}


function generateTerrain() {

  let yOff = 0;
  let x = 0;
  for (let i = 0; i <= width; i++) {
    let y = map(noise(yOff), 0, 1, 0, height);
    yOff -= 0.01;

    fill(0);
    //fill(0);
    rect(x, y, 0.1, height - y); x += 1;
  }
}
  
