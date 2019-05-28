// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mousePos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  player = new playerBox();
  wall = new Wall();
}

function draw() {
  background(255);
  colCheck();
  player.display();
  player.move();
  wall.display();
}

function mouseClicked(){
  mousePos = createVector(mouseX, mouseY);
  player.findVelocity();
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
    //this.velocity.mult(0.05);
  }

  move(){
    this.position.add(this.velocity);
  }
}


class Wall{
  constructor(){
    this.position = createVector(90, 90);
    this.height = random(height);
  }

  display(){
    fill(0, 255, 0);
    rect(this.position.x, this.position.y, 20, this.height);
  }
}

function colCheck(){
  let d = dist(player.position.x, player.position.y, wall.position.x, wall.position.y);
  print(d);
  if (player.position.x-player.size )
}