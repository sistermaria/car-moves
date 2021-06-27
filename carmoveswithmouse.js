function setup() {
  createCanvas(400, 400);
  
}

function draw() {

  
  background(248,209,242);
  fill(0,0,255);
  rect(mouseX,50,50,30);//blue rect
  if (mouseX>400){
  }
  else {
  stroke(255,0,0);
  fill(255,0,0);
  rect(mouseX+10,34,33,18);//red rect
  }
  fill(0,0,0);
  ellipse(mouseX+10,85,15,15);//back wheel
  
  fill(0,0,0);
  ellipse(mouseX+35,85,15,15);//front wheel
  
  
}