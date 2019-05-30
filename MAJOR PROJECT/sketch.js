// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mousePos;
let multiplier = 35;
let collisionSide;
let airborn = false;
let wallTypes = ['norm'];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  player = new playerBox();
  wall = new Wall();
}

function draw() {
  background(255);
  player.display();
  player.move();
  windowWallCollsion();
  wall.display();
  objectCollision();
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
    this.position = createVector(random(width), random(height));
    this.type = (wallTypes[random()]);
    this.rotation = (int(random(1, 3)));
    this.sizeA = 90;
    this.sizeB = 5;
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
  wallHit = collideRectRect(player.position.x, player.position.y, player.size, player.size, wall.position.x, wall.position.y, wall.sizeA, wall.sizeB);
  //print(wallHit);
  if (wallHit === true){
    if (wall.rotation === 1){
      player.velocity = 0;
      if (player.prevPos.y > player.position.y){
        print('gut');
        player.position.y = wall.position.y + wall.sizeB + 2;
        airborn = false;
      }
      if (player.prevPos.y < player.position.y){
        print('gut');
        player.position.y = wall.position.y - player.size - 2;
        airborn = false;
      }
    }
  }
}