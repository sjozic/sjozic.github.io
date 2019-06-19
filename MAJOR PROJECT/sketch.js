// SIMON JOZIC: MAJOR PROJECT
//COOL FUN JUMPING BOX GAME


//VARIABLE SHINDIGGERY
let mousePos;
//SPEED MULTIPLIER
let multiplier = 15;
//KEEPS TRACK OF WHAT SIDE OF THE PLAYER COLLIDED WITH A SURFACE
let collisionSide = 0;
//WHETHER OR NO THE PLAYER IS AIRBORN
let airborn = false;
//ALL THE DIFFERENT TYPES OF WALLS
let wallTypes = ['norm', 'kill'];
//VARIABLE KEEPING IN TRACK OF ALL WALLS IN THE LEVEL
let walls = [];
//AMOUNT OF WALLS IN THE LEVEL
let wallNum = 3;
//WHETHER OR NOT THE PLAYER CAN JUMP
let launchGood = true;
//HOLDS ALL OF THE PARTICLES
let particleArray = [];
//THE AMOUNT OF WALLS ADDED AFTER COMPLETING A LEVEL
let wallAdd = 3;
//USED TO KEEP TRACK WHETHER THE WALL YOU LANDED ON KILLED YOU
let noKill = false;
//USE TO DETECT IF THE GOAL WAS GRABBED
let goalGot = false;
//USED TO DETECT IF THE DOWN KEY WAS USED TO RESET THE LEVEL
let forceReset = false;
//KEEPS TRACK WHETHER DARK MODE IS ON OR OFF
let darkMode = false;
//COUNTS LEVELS COMPLETED
let levelCount = 0;


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
  //CHECK DARK MODE
  if (darkMode === false) {
    background(255);
  }
  else if (darkMode === true) {
    background(0);
  }

  //DISPLAY OBJECTS
  player.display();
  player.move();
  goal.display();
  for (let i = 0; i < walls.length; i++) {
    walls[i].display();
  }
  for (let d = 0; d < particleArray.length; d++) {
    particleArray[d].display();
    particleArray[d].move();
  }

  //EVERY FRAME CHECK COLLISIONS
  windowWallCollsion();
  objectCollision();

  //EVERY FRAME CHECK FOR THE GOAL
  goalCheck();

  //EVERY FRAME DRAW THE ANGLE PREDICTOR
  if (airborn === false) {
    trajectory();
  }

  //ON SCREEN TEXT
  push();
  noStroke();
  fill(50, 50, 50);
  if (darkMode === false) {
    fill(0, 0, 0, 50);
  }
  //FIRST LEVEL TUTORIAL
  if (levelCount === 1) {
    text('Up Arrow: Dark Mode', width - 120, 45);
    text('Down Arrow: Reset Level', width - 140, 45 / 2);
  }
  //LEVEL COUNTER
  textSize(50);
  text(str(levelCount), 0, 40);

  pop();
}


//DRAWS THE ANGLE PREDICTOR LINE
function trajectory() {
  stroke(255);
  if (darkMode === false) {
    stroke(0);
  }
  line(player.position.x + player.size / 2, player.position.y + player.size / 2, mouseX, mouseY);
  stroke(0);
}


//USED TO TOGGLE DARK MODE AND FORCE RESET LEVELS
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    forceReset = true;
    resetLevel();
  }
  if (keyCode === UP_ARROW) {
    darkMode = !darkMode;
  }
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
        collisionSide = 0;
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
        collisionSide = 0;
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
        collisionSide = 0;
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
        collisionSide = 0;
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
    fill(255);
    if (darkMode === false) {
      fill(0);
    }
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


//LANDING DUST
class DustParticle {
  constructor() {
    //SETS POSITION BASED ON WHAT SIDE COLLIDED
    if (collisionSide === 2) {
      this.x = player.position.x;
      this.y = player.position.y + player.size / 2;
    }
    else if (collisionSide === 1) {
      this.x = player.position.x + player.size;
      this.y = player.position.y + player.size / 2;
    }
    else if (collisionSide === 4) {
      this.x = player.position.x + player.size / 2;
      this.y = player.position.y;
    }
    else if (collisionSide === 3) {
      this.x = player.position.x + player.size / 2;
      this.y = player.position.y + player.size;
    }
    else if (collisionSide === 0) {
      this.x = player.position.x;
      this.y = player.position.y;
    }
    this.transparency = 150;
    this.size = random(10, 20);
    this.ySpeed = random(-1, 1);
    this.xSpeed = random(-0.5, 0.5);
    this.lifetime = int(random(80, 160));
    this.maxLifetime = this.lifetime;
    this.GRAV = -0.02;
    this.noiseLoc = random(10);
    this.steps = 0;
  }

  move() {
    this.steps++;
    this.lifetime -= 1;
    this.ySpeed += 0;
    this.x += (map(noise(this.noiseLoc), 0, 1, -1, 1));
    this.noiseLoc += 0.01;
    this.y += this.ySpeed;
    this.floorCollision();
    this.transparency--;
  }

  floorCollision() {
    if (this.y > height) {
      this.y = height;
      this.ySpeed *= -1;
    }
  }

  isAlive() {
    if (this.lifetime > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  display() {
    ellipseMode(CENTER);
    push();
    noStroke();
    translate(this.x, this.y);
    scale(map(this.lifetime, 0, this.maxLifetime, 0, 1));
    rotate(radians(this.steps * 3));
    //IF GOAL WAS GOTTEN, DISPLAY YELLOW CIRCLES
    if (goalGot === true) {
      fill(255, 255, 0, this.transparency);
      ellipse(0, 0, this.size, this.size);
    }
    //IF THE WALL DIDNT KILL YOU, DISPLAY DUST
    else if (noKill === false) {
      fill(150, 150, 150, this.transparency);
      ellipse(0, 0, this.size, this.size);
    }
    //IF THE WALL DID KILL YOU, DISPLAY DEATH PARTICLE
    else if (noKill === true) {
      fill(255, 0, 0, this.transparency);
      rect(0, 0, this.size, this.size);
    }
    pop();
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
    noKill = false;
    goalGot = false;
    particles();
  }
  else if (player.position.x < 0) {
    player.position.x = 0;
    //RIGHT SIDE OF WINDOW
    collisionSide = 2;
    noKill = false;
    goalGot = false;
    particles();
  }
  else if (player.position.y + player.size > height) {
    player.position.y = height - player.size;
    //BOTTOM SIDE OF WINDOW
    collisionSide = 3;
    noKill = false;
    goalGot = false;
    particles();
  }
  else if (player.position.y < 0) {
    player.position.y = 0;
    //TOP SIDE OF WINDOW
    collisionSide = 4;
    noKill = false;
    goalGot = false;
    particles();
  }
}


function particles() {
  particleArray.length = 0;
  if (noKill === false) {
    for (let l = 0; l < 5; l++) {
      particleArray.push(new DustParticle);
    }
  }
  //ADD MORE DEATH PARTICLES THAN DUST PARTICLES
  else if (noKill === true) {
    for (let l = 0; l < 10; l++) {
      particleArray.push(new DustParticle);
    }
  }
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
      fill(255);
      if (darkMode === false) {
        fill(0);
      }
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
    goalGot = true;
    particles();
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
  if (forceReset === false) {
    levelCount++;
  }
  if (wallNum < 80 && forceReset === false) {
    wallNum += wallAdd;
    wallAdd++;
  }
  forceReset = false;

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
            noKill = false;
            goalGot = false;
            particles();
          }
          //IF THE PLAYER IS COMING FROM THE TOP TO THE BOTTOM OF THE SCREEN
          else if (player.prevPos.y < player.position.y) {
            player.position.y = walls[j].position.y - player.size;
            collisionSide = 3;
            airborn = false;
            noKill = false;
            goalGot = false;
            particles();
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
            noKill = false;
            goalGot = false;
            particles();
          }
          //IF THE PLAYER IS COMING FROM THE LEFT TO THE RIGHT OF THE SCREEN
          if (player.prevPos.x < player.position.x) {
            player.position.x = walls[j].position.x - player.size;
            collisionSide = 1;
            airborn = false;
            noKill = false;
            goalGot = false;
            particles();
          }
        }
      }
    }
    //KILL THE PLAYER IF THEY HIT A KILL (PURPLE) WALL
    else if (walls[j].type === 'kill') {
      if (horizontalWallHit === true && walls[j].rotation === 1 || verticalWallHit === true && walls[j].rotation === 2) {
        noKill = true;
        goalGot = false;
        particles();
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