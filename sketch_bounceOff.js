var fixedRect, movingRect;
 function setup()
  { createCanvas(1200,800); 
    fixedRect = createSprite(400, 100, 50, 80);
     fixedRect.shapeColor = "green"; 
     fixedRect.debug = true;
      movingRect = createSprite(400, 800, 80, 30);
       movingRect.shapeColor = "yellow"; 
movingRect.velocityY = -5;
fixedRect.velocityY = +5;
  }
function draw(){
    background(0)
    if((movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2) &&
    (fixedRect.x- movingRect.x < movingRect.width/2+fixedRect.width/2) ){
        movingRect.velocityX = movingRect.velocityX *(-1)
        fixedRect.velocityX = fixedRect.velocityX *(-1)
    }
if((movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2)&&
(fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2)){
    fixedRect.velocityY = fixedRect.velocityY *(-1)
    movingRect.velocityY = movingRect.velocityY *(-1)
}




    drawSprites()
}