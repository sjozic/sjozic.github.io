// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let v;
const GRID_SPACING = 5;

function setup() {
  createCanvas(640, 480);
  v = createCapture(VIDEO);
  v.hide();
}

function draw() {
  background(220);
  v.loadPixels();

  for (let x = 0; x < v.width; x += GRID_SPACING){
    for (let y = 0; y < v.length; y += GRID_SPACING){
      
    }
  }

  // for (let i = 0; i < pixels.length; i+=4){
  //   if (avgPixel(i) > 60){
  //     setPixelColor(i, 0, 255, 0);
  //   }
  //   else{
  //     setPixelColor(i, 80, 0, 80);
  //   }
  //   pixels[i] = 200;
  // }
  drawCharacter(, , avgPixel());
  v.updatePixels();
  image(v, 0, 0);
  
}

function avgPixel(pos){
  return (pixels[pos] + pixels[pos + 1] + pixels[pos + 2]) / 3;
}

function setPixelColor(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos+ 1] = g;
  pixels[pos+ 2] = b;
}

function drawCharacter(){
  textSize(GRID_SPACING);
  fill(255);
  noStroke();

  if (avg > 200){
    text("@", x, y);
  }
  else if (avg > 100){
    text("-", x, y);
  }
  else if (avg > 40){
    (".", x, y);
  }
}