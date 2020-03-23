var x,y=0;
var l=200;
var f=0;
var theta;
var randomColorX,randomColorY;

function setup() {
  createCanvas(500, 500);
  background(255,200,100);
  theta=PI/180;
}

function draw() {
 
  
  x=250+l*cos(theta*f);
  y=250+l*sin(theta*f);
  fill(200,200,255);
  randomColorX=random(0,255);
  randomColorY=random(0,255);
  if(f%30==0)
    stroke(randomColorX,randomColorY,210);

  line(250,250,x,y);
  fill(25,210,180);
  ellipse(x,y,15,15)
  f=f+1;
  
   
}