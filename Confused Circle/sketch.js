var circleX=0;
var col=1;
var flag=true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 0, 200);
  
  fill(col);
  ellipse(circleX,150,50,50);
  
  
  if(flag){
    circleX=circleX+1;
    col=col+255/400;
  }if(!flag){
    circleX=circleX-1;
    col=col-255/400;
  }
  if(circleX==375){
    flag=false;
  }if(circleX==25){
    flag=true;
  }
  
      
  
}