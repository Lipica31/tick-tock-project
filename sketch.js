var hr,mn,sc;
var scAngle,hrAngle,mnAngle;

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("yellow"); 
  translate(200,200);
  
  fill(0,230,242);

  text("HOUR",30,40)
    
  fill(31,252,2);
 
text("MINUTE",30,60);

fill(186,26,239);

text("SECOND",30,80);

  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr% 12,0,12,0,360);
 push()
 //drawing second hand
 rotate(scAngle)//rotate the hand based on angle calculated
 stroke(186,26,239);
 strokeWeight(7);
line(0,0,100,0);
pop();
push()
 //drawing minute hand
 rotate(mnAngle)//rotate the hand based on angle calculated
 stroke(31,252,2);
 strokeWeight(7);
line(0,0,75,0);
pop();
push()
 //drawing hour hand
 rotate(hrAngle)//rotate the hand based on angle calculated
 stroke(0,230,242);
 strokeWeight(7);
line(0,0,50,0);
pop();
stroke(244,19,203);
point(0,0);
strokeWeight(10);
noFill();

stroke(0,230,242);
arc(0,0,260,260,0,hrAngle);

stroke(31,252,2);
arc(0,0,280,280,0,mnAngle);
stroke(186,26,239);
arc(0,0,300,300,0,scAngle);


  drawSprites();
}