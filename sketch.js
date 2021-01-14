var fixedRect, movingRect;
 function setup()
  { createCanvas(1200,800); 
    fixedRect = createSprite(400, 200, 50, 50);
     fixedRect.shapeColor = "green"; 
     fixedRect.debug = true;
      movingRect = createSprite(200, 200, 150, 50);
       movingRect.shapeColor = "yellow"; }

function draw() {
  background(255); 
  movingRect.x=mouseX ;
  movingRect.y=mouseY;
  if((movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2) &&
   (fixedRect.x- movingRect.x < movingRect.width/2+fixedRect.width/2) &&
(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2)&&
(fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2))

   { movingRect.shapeColor = "red"; } 
   else  { movingRect.shapeColor = "yellow"; }

  drawSprites();
}