// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mousePos;
let multiplier = 20;
let collisionSide;
let airborn = false;
let wallTypes = ['norm'];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  player = new playerBox();
  wall = new Wall();
}

function draw() {
  background(255);
  player.display();
  player.move();
  windowWallCollsion();
}

function mouseClicked(){
  if (airborn === false){
    mousePos = createVector(mouseX, mouseY);
    player.findVelocity();
    airborn = true;
  }
}

class playerBox{
  constructor(){
    this.position = createVector(50, 50);
    this.velocity = createVector(0, 0);
    this.size = 20;
    this.speed = 30;
  }

  display(){
    fill(0);
    rect(this.position.x, this.position.y, this.size, this.size);
  }

  findVelocity(){
    this.velocity = p5.Vector.sub(mousePos, this.position);
    this.velocity.normalize();
    this.velocity.mult(multiplier);
    
  }

  move(){
    this.position.add(this.velocity);
  }
}




function windowWallCollsion(){
  if (player.position.x - player.size/2 <= 0 || player.position.x + player.size/2 >= width || player.position.y - player.size/2 <= 0 || player.position.y + player.size/2 > height){
    player.velocity = 0;
    airborn = false;
  }

  if (player.position.x + player.size/2 > width){
    player.position.x = width - player.size/2;
    collisionSide = 1;
  }
  else if (player.position.x - player.size/2 < 0){
    player.position.x = 0 + player.size/2;
    collisionSide = 2;
  }
  else if (player.position.y + player.size/2 > height){
    player.position.y = height - player.size/2;
    collisionSide = 3;
  }
  else if (player.position.y - player.size/2 < 0){
    player.position.y = 0 + player.size/2;
    collisionSide = 4;
  }
  else {
    collisionSide = 0;
  }

  if (collisionSide > 0){
    dustCloud();
  }
}


function dustCloud(){
  //
}



class Wall{
  constructor(){
    this.position = (random(width*height));
    this.type = (wallTypes[random()]);
    this.rotation = (random(0, 1));
  }






}