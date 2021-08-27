var garden,rabbit;
var gardenImg,rabbitImg;
var apples,leaves;
var applesImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.y = garden.height/8 ;
garden.velocityY = 4;
  
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = mouseX

leaves = createSprite (180,340,30,30);
leaves.scale = 0.09;
leaves.addImage (leavesImg);
//leaves.velocityY= 5;

apples = createSprite (240,340,30,30);
apples.scale = 0.09;
apples.addImage (applesImg);
//apples.velocityY = 4;

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnApples()
  spawnLeaves()

  drawSprites();
}

function  spawnApples (){
  if (frameCount % 80 == 0){
    //console.log (frameCount)
  var apples = createSprite  (200,100,10,10)
  apples.addImage  (appleImage)
apples.scale = 0.4;
apples.x = Math.round(random(10,60))
apples.velocityY = -4

apples.depth = garden.depth
garden.depth = garden.depth +1 
 }
}

 function  spawnLeaves(){
  if  (frameCount % 80 == 0){
  var leaves = createSprite(300,90,10,10)
  leaves.addImage (leavesImage)
  leaves.scale = 0.4;
  leaves.x = Math.round(random(10,60))
  leaves.velocityY = -4 ;

  leaves.depth = garden.depth
  garden.depth = garden.depth  +1 

  }
 }
 









