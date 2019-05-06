//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridFill = [0, 255];
let winB = 0;
let winW = -1;
let randomNum;
let gridData = [[], [], [], []];


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomizer();
  gridDataSetup();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  winCondition();
}



function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (mouseButton === LEFT){
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
  
  else {
    flip(currentCol, currentRow);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0){ 
        gridData[row][col] = 255;
        winW += 1;
        winB -= 1;
      }
      else {
        gridData[row][col] = 0;
        winB += 1;
        winW -= 1;
      }
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]);
      stroke(0); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function gridDataSetup(){
  for (let x = 0; x < NUM_COLS; x ++){
    for (y = 0; y < NUM_ROWS; y ++){
      gridData[y][x] = randomizer();
    }
  }

}



function winCondition(){
  print(winB);
  print(winW);
  textSize(50);
  stroke(255);
  if (winB >= 20){
    text("YOU WIN", 50, 50);
  }
  else if (winW >= 20){
    text("YOU WIN", 50, 50);
  }
}

function randomizer(){
  randomNum = int(random(0, 2));
  if (randomNum === 1){
    winW += 1;
    return 255;
  }
  else {
    winB += 1;
    return 0;
  }
}