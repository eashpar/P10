var ship ,ship_Sailing;
var sea ,seaImage;

function preload(){
  ship_Sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,180,400,20);
  sea.addImage(seaImage);

  ship = createSprite(80,300,20,50);
  ship.addAnimation("sailing",ship_Sailing);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
 
  sea.velocityX = -2;

  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}