//Chess Board


//Initialize variables
let rectColor = false;
let rectLocationX = 0;
let rectLocationY = 0;


function setup() {
  createCanvas(600, 600);
  noLoop();
}


function draw() {
  drawChessBoard();
}


function drawChessBoard() {
  //while Y<chessboards height
  for (rectLocationY; rectLocationY < 525; rectLocationY += 75) {

    //while X<chessboards width
    for (rectLocationX; rectLocationX < 525; rectLocationX += 75) {
      colorSwap();
      rect(rectLocationX, rectLocationY, 75, 75);
    }

    //reset rectLocationX to far left
    rectLocationX = 0;
  }
}

function colorSwap() {
  //Swap colors at start of function
  rectColor = !rectColor;

  //if rectColor is true, fill white, else, fill black.
  if (rectColor === true) {
    fill(255);
  }
  else {
    fill(0);
  }
}
