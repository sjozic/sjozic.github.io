//Black and White Target


let size = 400;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(240);

  //draw ellipses
  for (let i = 0; i < 10; i++) {
    ellipse(200, 200, size, size);
    size -= 40;
  }

}

