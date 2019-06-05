// MAJOR PROJECT

//VARIABLE SHINDIGGERY
let mousePos;
//SPEED MULTIPLIER
let multiplier = 15;
//KEEPS TRACK OF WHAT SIDE OF THE PLAYER COLLIDED WITH A SURFACE
let collisionSide = 0;
//WHETHER OR NO THE PLAYER IS AIRBORN
let airborn = false;
//ALL THE DIFFERENT TYPES OF WALLS
let wallTypes = ['norm', 'kill', 'ice'];
//VARIABLE KEEPING IN TRACK OF ALL WALLS IN THE LEVEL
let walls = [];
//AMOUNT OF WALLS IN THE LEVEL
let wallNum = 10;
//WHETHER OR NOT THE PLAYER CAN JUMP
let launchGood = true;

//INITIAL SETUP (CANVAS, FIRST LEVEL, PLAYER, AND GOAL)
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  player = new playerBox();
  goal = new Goal();
  resetLevel();
}

//EVERY FRAME DO ALL OF THESE SHENANIGANS
function draw() {
  background(255);
  player.display();
  player.move();
  goal.display();
  for (let i = 0; i < walls.length; i++) {
    walls[i].display();
  }
  windowWallCollsion();
  objectCollision();
  goalCheck();
}


//CONTROLLES WHEN, WHERE, AND IF YOU CAN JUMP
function mouseClicked() {
  if (airborn === false) {
    mousePos = createVector(mouseX, mouseY);

    //JUMP FROM THE BOTTOM OF A FLOOR (CEILING I GUESS(JUMPING DOWNWARDS))
    if (collisionSide === 4) {
      if (mouseY < player.position.y + player.size) {
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }

    //JUMP UPWARDS FROM A FLOOR
    if (collisionSide === 3) {
      if (mouseY > player.position.y) {
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }

    //JUMP OFF THE RIGHT SIDE OF A WALL
    if (collisionSide === 2) {
      if (mouseX < player.position.x + player.size) {
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }

    //JUMP OFF THE LEFT SIDE OF A WALL
    if (collisionSide === 1) {
      if (mouseX > player.position.x) {
        print("bad");
      }
      else {
        player.findVelocity();
        airborn = true;
      }
    }
    //IF YOU HAVENT COLLIDED WITH ANYTHING IN A GIVEN LEVEL, NO COLLISION SIDE
    if (collisionSide === 0) {
      player.findVelocity();
      airborn = true;
    }
  }
}


//BUILDING TH PLAYER
class playerBox {
  constructor() {
    this.position = createVector(50, 50);
    this.velocity = createVector(0, 0);
    this.size = 20;
    this.speed = 30;
    this.prevPos;
  }

  display() {
    fill(0);
    rect(this.position.x, this.position.y, this.size, this.size);
  }

  //MOVING THE PLAYER VIA VECTOR
  findVelocity() {
    this.velocity = p5.Vector.sub(mousePos, this.position);
    this.velocity.normalize();
    this.velocity.mult(multiplier);

  }

  move() {
    this.prevPos = createVector(this.position.x, this.position.y);
    this.position.add(this.velocity);
  }
}



//KILLS MOMENTUM AND CORRECTS POSITION WHEN RUNNING INTO EDGES OF THE WINDOW, ALSO KEEPS TRACK OF WHICH SIDE OF PLAYER COLLIDED WITH IT
function windowWallCollsion() {
  if (player.position.x <= 0 || player.position.x + player.size >= width || player.position.y <= 0 || player.position.y + player.size > height) {
    player.velocity = 0;
    airborn = false;
  }

  //IF THE PLAYER IS COLLIDING WITH THE EDGE OF THE WINDOW, STOP
  if (player.position.x + player.size > width) {
    player.position.x = width - player.size;
    //LEFT SIDE OF WINDOW
    collisionSide = 1;
  }
  else if (player.position.x < 0) {
    player.position.x = 0;
    //RIGHT SIDE OF WINDOW
    collisionSide = 2;
  }
  else if (player.position.y + player.size > height) {
    player.position.y = height - player.size;
    //BOTTOM SIDE OF WINDOW
    collisionSide = 3;
  }
  else if (player.position.y < 0) {
    player.position.y = 0;
    //TOP SIDE OF WINDOW
    collisionSide = 4;
  }
}


function dustCloud() {
  //
}


//BUILD THE WALL
class Wall {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.type = (random(wallTypes));
    this.rotation = (int(random(1, 3)));
    this.sizeA = 90;
    this.sizeB = 10;
  }

  display() {
    //DEPENDING ON WALL TYPE, FILL DIFFERENT COLOR
    if (this.type === 'kill') {
      fill(255, 0, 255);
    }
    else if (this.type === 'norm') {
      fill(0);
    }
    else if (this.type === 'ice') {
      fill(0, 0, 255, 150);
    }

    //DRAW DIFFERENT WALL ROTATION
    if (this.rotation === 1) {
      rect(this.position.x, this.position.y, this.sizeA, this.sizeB);
    }
    else {
      rect(this.position.x, this.position.y, this.sizeB, this.sizeA);
    }
  }
}


//BUILD THE GOAL
class Goal {
  constructor() {
    this.size = 20
    this.position = createVector(random(width), random(height))
  }

  display() {
    fill(255, 255, 0);
    ellipse(this.position.x, this.position.y, this.size, this.size)
  }
}


//ARE YOU TOUCHING THE GOAL??
function goalCheck() {
  goalTouch = collideRectCircle(player.position.x, player.position.y, player.size, player.size, goal.position.x, goal.position.y, goal.size, goal.size);
  if (goalTouch === true) {
    resetLevel();
  }
}


//RANDOMIZE THE WALLS AND RESET PLAYER POSITION AFTER GETTING THE GOAL (ALSO INCREASE WALL COUNT) 
function resetLevel() {
  walls = [];
  for (let n = 0; n < wallNum; n++) {
    walls.push(new Wall());
  }
  goal = new Goal();
  player.position.x = 50;
  player.position.y = 50;
  player.velocity = 0;
  collisionSide = 0;
  airborn = false;
  wallNum++;
}


//THIS MONSTER OF A FUNCTION HANDLES WALL COLLISION WITH THE PLAYER FOR EVERY KIND OF WALL 
function objectCollision() {
  for (let j = 0; j < walls.length; j++) {
    //CHECK PLAYER TO WALL COLLISION
    horizontalWallHit = collideRectRect(player.position.x, player.position.y, player.size, player.size, walls[j].position.x, walls[j].position.y, walls[j].sizeA, walls[j].sizeB);
    verticalWallHit = collideRectRect(player.position.x, player.position.y, player.size, player.size, walls[j].position.x, walls[j].position.y, walls[j].sizeB, walls[j].sizeA);
    if (walls[j].type === 'norm' || walls[j].type === 'ice') {
      //FLAT FLOOR COLLISION
      if (horizontalWallHit === true) {
        if (walls[j].rotation === 1) {
          player.velocity = 0;
          //IF THE PLAYER IS COMING FROM THE BOTTOM TO THE TOP OF THE SCREEN
          if (player.prevPos.y > player.position.y) {
            player.position.y = walls[j].position.y + walls[j].sizeB;
            collisionSide = 4;
            airborn = false;
            dustCloud();
          }
          //IF THE PLAYER IS COMING FROM THE TOP TO THE BOTTOM OF THE SCREEN
          else if (player.prevPos.y < player.position.y) {
            player.position.y = walls[j].position.y - player.size;
            collisionSide = 3;
            airborn = false;
          }
        }
      }
      //FLAT WALL COLLISION
      if (verticalWallHit === true) {
        if (walls[j].rotation === 2) {
          player.velocity = 0;
          //IF THE PLAYER IS COMING FROM THE RIGHT TO THE LEFT OF THE SCREEN
          if (player.prevPos.x > player.position.x) {
            player.position.x = walls[j].position.x + walls[j].sizeB;
            collisionSide = 2;
            airborn = false;
          }
          //IF THE PLAYER IS COMING FROM THE LEFT TO THE RIGHT OF THE SCREEN
          if (player.prevPos.x < player.position.x) {
            player.position.x = walls[j].position.x - player.size;
            collisionSide = 1;
            airborn = false;
          }
        }
      }
    }
    //KILL THE PLAYER IF THEY HIT A KILL (PURPLE) WALL
    else if (walls[j].type === 'kill') {
      if (horizontalWallHit === true && walls[j].rotation === 1 || verticalWallHit === true && walls[j].rotation === 2) {
        die();
      }
    }
  }
}


//PERISH (RESET PLAYER)
function die() {
  collisionSide = 0;
  player.velocity = 0;
  player.position.x = 50;
  player.position.y = 50;
  airborn = false;
}