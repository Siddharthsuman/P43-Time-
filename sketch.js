var Hr,Min,Sec;
var backgroundImg;

function preload(){
  backgroundImg=loadImage("Modern.jpg");
  circleImg=loadImage("circle.png")
  TimeImg=loadImage("Time.png")
}

function setup() {
  createCanvas(1366,625);
 circle=createSprite(683,312,1,1);
 circle.addImage(circleImg)
 circle.scale=2.71

 Time=createSprite(683,312,1,1);
 Time.addImage(TimeImg);
 Time.scale=0.65

}

function draw() {
  background(backgroundImg);  
  drawSprites();
 



  




    translate(683,312)
    rotate(-90)
    angleMode(DEGREES);

   //Calculating Time using Predefined Function from   P5.js
   Hr=hour();
   Min=minute();
   Sec=second();

   SecAngle=map(Sec,0,60,0,360)
   HrAngle=map(Hr%12,0,12,0,360);
   MinAngle=map(Min,0,60,0,360);

   //Drawing Seconds Hand
   push();
   rotate(SecAngle);
   stroke(255, 255, 0);
   strokeWeight(7);
   line(0,0,200,0);
pop();

 //Drawing Minutes Hand
 push();
 rotate(MinAngle);
 stroke(0, 67, 255);
 strokeWeight(7);
 line(0,0,150,0);
pop();

//Drawing Hours Hand
push();
rotate(HrAngle);
stroke(42, 255, 0);
strokeWeight(7);
line(0,0,100,0);
pop();

 

//Sec Outline
push();
strokeWeight(10);
noFill();
  stroke(255, 255, 114);
  arc(0,0,475,475,0,SecAngle);
pop();
//Min Outline
push();
strokeWeight(8);
noFill();
  stroke(109, 148, 255);
  arc(0,0,455,455,0,MinAngle);
pop();
//Hour Outline
push();
strokeWeight(8);
noFill();
  stroke(99, 255, 79);
  arc(0,0,435,435,0,HrAngle);
pop();
}