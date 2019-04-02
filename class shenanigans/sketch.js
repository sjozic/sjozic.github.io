// Basic Transformations Sandbox

let ballObjects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  ballObjects.push(new Ball(mouseX, mouseY));
}

function draw() {
  //background(255);
  for(let currentBall of ballObjects){
    currentBall.move();
    currentBall.display();
    currentBall.mouseOver();
  }
}

class Ball{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.xSpeed = random(50, -50);
    this.ySpeed = random(50, -50);
    this.size = 30;
    this.gravity = 0.1;
  }

  display() {
    fill(random(255), random(255), random(255), random(255));
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += this.gravity;

    if (this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }

    if (this.y > height || this.y < 0){
      this.ySpeed *= -0.92;
      this.y = height;
    }
  }

  mouseOver(){
    let d = dist(this.x, this.y, mouseX, mouseY);
    if(d < this.size / 2){
      if(mouseIsPressed && mouseButton === CENTER){
        this.size += 20;
      }
      if(mouseIsPressed && mouseButton === RIGHT){
        this.size -= 20;
      }
    }
  }
}