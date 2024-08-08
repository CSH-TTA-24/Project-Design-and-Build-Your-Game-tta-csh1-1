//Globaly declare variables
let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;

//rectangle 1 Width & height
let rect1W = 20;
let rect1H = 100;
let rect1X = 20;
let rect1Y = 200;
//rectangle 2 Width & Height
let rect2W = 20;
let rect2H = 100;
let rect2X = 460;
let rect2Y = 200;
//Scoreboard
let redScore = 0
let blueScore = 0
//Time
let timePassed;
//speed limit
const maxSpeed = 4



function setup() {
  background(0)
  createCanvas(500, 500);
  xSpeed = random(-5, 5)
  ySpeed= random(-5, 5)
  
  fill(255,0,0)
//1st Rectangle Player 1
  rect(rect1X,rect1Y,rect1W,rect1H);
//2nd Rectangle Player 2
  rect(rect2X,rect2Y,rect2W,rect2H);
}


function draw() {
  background(0)
  timePassed = round(millis()/1000)
  
//Bouncing ball code
  fill(251,251,251);
  if(timePassed>= 5){
  ellipse(xPos, yPos, 25, 25);

//contrain limits the lowe
xPos += constrain (xSpeed, -maxSpeed, maxSpeed) * xDirection
yPos += constrain (ySpeed, -maxSpeed, maxSpeed) * yDirection 

   
  }




  
//1st rectangle
  fill(255,0,0)
  rect(rect1X,rect1Y,rect1W,rect1H);

  //Stops the movement of the rectangle off the screen
  if(rect1Y<1){
    rect1Y=1
  }
  if(rect1Y>399){
    rect1Y=399
  }

  //Movement of the 1st rectangle in the Y-Axis
  if(keyIsDown(DOWN_ARROW)){
    rect2Y += 5;
  }
  if(keyIsDown(UP_ARROW)){
    rect2Y -= 5;
  }

  //2nd Rectangle
  fill(0, 0, 255)
  rect(rect2X,rect2Y,rect2W,rect2H);
  
  //Stops the movement of the rectangle off the screen
  if(rect2Y<1){
    rect2Y=1
  }
  if(rect2Y>399){
    rect2Y=399
  }
  //Movement of the 2nd rectangle in the Y-axis
  if(keyIsDown(83)){
    rect1Y += 5;
  }

  if(keyIsDown(87)){
    rect1Y -= 5;
  }
  //Bouncing the ball of the rectangle
  //Bounce of the red rectangle
    if(xPos<= rect1X+rect1W+12 && yPos >= rect1Y && yPos<= rect1Y+rect1H){
      xDirection *= -1
      xSpeed++
      ySpeed++

    }
  //Bounce of the blue rectangle
    if(xPos>=rect2X-12 && yPos>=rect2Y && yPos <= rect2Y+rect2H){
      xDirection *=-1
      xSpeed++
      ySpeed++
    }
  //Resetting the ball after it goes ofscreen
    if(xPos<=-25){
      xSpeed = random(-5, 5)
      ySpeed= random(-5, 5)
      xPos=250
      yPos=250
      //Adding a point
      blueScore++;
      timePassed = 0;
    }
    if(xPos>=525){
      xSpeed = random(-5, 5)
      ySpeed= random(-5, 5)
      xPos=250
      yPos=250
      //Adding a point
      redScore++;
      timePassed = 0;
    }
    
    //Bouncing the ball of the top and bottom

  
    if(yPos < 25 || yPos > 475){
      yDirection *= -1
    }
    //The Scoreboard
    fill(255,0,0)
    text("RED SCORE:"+ redScore,50,43)
    fill(0,0,255)
    text("BLUE SCORE:" + blueScore, 300,43)
    textSize(20)
    if((round(millis()/1000)) == 1){
      text(`${round(millis()/1000)} `, 230,40);
      timePassed++
    }else{
      timePassed++;
      text(`${round(millis()/1000)} `, 230,40);
    }
}
