// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values = [1, 2, 3, 1];
const ARRAY_SIZE = 15;
function setup() {
  noCanvas();
  noLoop();
  populateArray();
}

function populateArray(){
  for (let i = 0; i < ARRAY_SIZE; i++){
    //
  }
}

function selectionSort(){
  for (let index = 0; index < values.length; index ++){
    let minimum = values[index];
    let minimumLoc = index;
    for (let checkIndex = index+1; checkIndex < values.length; ){
      let cur = values[checkIndex];
      if (cur < minimum){
        minimum = cur;
        minimumLoc = checkIndex;
      }
    }
  }
}

function draw() {
  print(values);
  selectionSort();
  print(values);
}
