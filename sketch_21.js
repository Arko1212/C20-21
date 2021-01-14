var fixedRect, movingRect;
 function setup()
  { createCanvas(1200,800); 
    fixedRect = createSprite(400, 200, 50, 50);
     fixedRect.shapeColor = "green"; 
     fixedRect.debug = true;
      movingRect = createSprite(200, 200, 150, 50);
       movingRect.shapeColor = "yellow"; 
 gameObj1=createSprite(250,300,100,70)
 gameObj1.shapeColor="green"}
function draw() {
  background(255); 
  movingRect.x=mouseX ;
  movingRect.y=mouseY;
  var temp=isTouching(movingRect,gameObj1)
  if(temp)
  {
    movingRect.shapeColor = "red"
  }
  else{
      movingRect.shapeColor="yellow"
  }

  drawSprites();
}
function isTouching(p1,p2){
    if((p1.x- p2.x < p1.width/2+p2.width/2) &&
   (p2.x- p1.x < p1.width/2+p2.width/2) &&
(p1.y-p2.y < p1.height/2+p2.height/2)&&
(p2.y-p1.y < p1.height/2+p2.height/2))

   {return true} 
   else  { return false }
}