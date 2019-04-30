// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;

let gridData = [[0, 255, 0 , 255, 0], [255, 0, 255, 0 ,255, 0], [0, 255, 0 , 255, 0], [255, 0, 255, 0 ,255, 0]];



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
}



function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
}



function drawGrid(){
  for (let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      fill(gridData[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}



function determineActiveSquare(){
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}



function flip(col, row){
  if(gridData[row][col] === 0){
    gridData[row][col] =255;
  }
  else {
    gridData[row][col] = 0;
  }
}

function mousePressed(){
  flip(currentCol, currentRow);
}