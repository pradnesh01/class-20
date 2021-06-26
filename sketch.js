var mRect,fRect


function setup() {
  
  
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
  mRect=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  mRect.x=mouseX
  mRect.y=mouseY

if(mRect.x-fRect.x <=mRect.width/2+fRect.width/2
  
  && fRect.x-mRect.x <=mRect.width/2+fRect.width/2
  
  && mRect.y-fRect.y <=mRect.height/2+fRect.height/2
  
    && fRect.y-mRect.y <=mRect.height/2+fRect.height/2
){

mRect.shapeColor="red"
fRect.shapeColor="red"

}

else{
  mRect.shapeColor="green"
  fRect.shapeColor="green"

}



  drawSprites();
}