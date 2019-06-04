// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mousePos;
let multiplier = 30;
let collisionSide = 0;
let airborn = false;
let wallTypes = ['norm'];
let walls = [];
const WALL_NUM = 15;
let launchGood = true;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  player = new playerBox();
  for (let n = 0; n < WALL_NUM; n ++){
    walls.push(new Wall());
  }
}

function draw() {
  background(255);
  player.display();
  player.move();
  windowWallCollsion();
  objectCollision();
  for (let i = 0; i < walls.length; i++){
    walls[i].display();
  }
  
}

function mouseClicked(){
  if (airborn === false){
    mousePos = createVector(mouseX, mouseY);

    if (collisionSide === 4){
      if (mouseY < player.position.y+player.size){
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }


    if (collisionSide === 3){
      if (mouseY > player.position.y){
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }


    if (collisionSide === 2){
      if (mouseX < player.position.x+player.size){
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }


    if (collisionSide === 1){
      if (mouseX > player.position.x){
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }


    if (collisionSide === 0) {
      player.findVelocity();
      airborn = true;
    }
  }
}

class playerBox{
  constructor(){
    this.position = createVector(50, 50);
    this.velocity = createVector(0, 0);
    this.size = 20;
    this.speed = 30;
    this.prevPos;
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
    this.prevPos = createVector(this.position.x, this.position.y);
    this.position.add(this.velocity);
  }
}




function windowWallCollsion(){
  if (player.position.x <= 0 || player.position.x + player.size >= width || player.position.y <= 0 || player.position.y + player.size > height){
    player.velocity = 0;
    airborn = false;
  }

  if (player.position.x + player.size > width){
    player.position.x = width - player.size;
    collisionSide = 1;
  }
  else if (player.position.x < 0){
    player.position.x = 0;
    collisionSide = 2;
  }
  else if (player.position.y + player.size > height){
    player.position.y = height - player.size;
    collisionSide = 3;
  }
  else if (player.position.y < 0){
    player.position.y = 0;
    collisionSide = 4;
  }
}


function dustCloud(){
  if (collisionSide === 3){
    fill(0);
    ellipse(player.position.x + player.size/2, player.position.y + player.size, 50, 50);
  }
}



class Wall{
  constructor(){
    this.position = createVector(random(width), random(height));
    this.type = (wallTypes[random()]);
    this.rotation = (int(random(1, 3)));
    this.sizeA = 90;
    this.sizeB = 10;
  }

  display(){
    fill(0);
    if (this.rotation === 1){
      rect(this.position.x, this.position.y, this.sizeA, this.sizeB);
    }
    else {
      rect(this.position.x, this.position.y, this.sizeB, this.sizeA);
    }
  }
}



function objectCollision(){
  for (let j = 0; j < walls.length; j++){
    horizontalWallHit = collideRectRect(player.position.x, player.position.y, player.size, player.size, walls[j].position.x, walls[j].position.y, walls[j].sizeA, walls[j].sizeB);
    verticalWallHit = collideRectRect(player.position.x, player.position.y, player.size, player.size, walls[j].position.x, walls[j].position.y, walls[j].sizeB, walls[j].sizeA);
    if (horizontalWallHit === true){
      if (walls[j].rotation === 1){
        player.velocity = 0;
        if (player.prevPos.y > player.position.y){
          player.position.y = walls[j].position.y + walls[j].sizeB + 2;
          collisionSide = 4;
          airborn = false;
          dustCloud();
        }
        if (player.prevPos.y < player.position.y){
          player.position.y = walls[j].position.y - player.size - 2;
          collisionSide = 3;
          airborn = false;
        }
      }
    }
    if (verticalWallHit === true){  
      if (walls[j].rotation === 2){
        player.velocity = 0;
        if (player.prevPos.x > player.position.x){
          player.position.x = walls[j].position.x + walls[j].sizeB + 2;
          collisionSide = 2;
          airborn = false;
        }
        if (player.prevPos.x < player.position.x){
          player.position.x = walls[j].position.x - player.size - 2;
          collisionSide = 1;
          airborn = false;
        }
      }
    }
  }
}