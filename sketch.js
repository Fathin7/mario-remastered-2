var boy,boyRunning;
var ground;




function preload(){
boyRunning = loadAnimation("images/png/Run__000.png", "images/png/Run__001.png" , "images/png/Run__002.png"
 , "images/png/Run__003.png" , "images/png/Run__004.png", "images/png/Run__005.png" , "images/png/Run__006.png" , "images/png/Run__007.png" 
 , "images/png/Run__008.png" , "images/png/Run__009.png");

boyStanding = loadAnimation("images/png/Idle__000.png");
bgimage = loadImage("images/BG/BG.png");
tile1img=loadImage("images/Tiles/newImg.png")
tile2img = loadImage("images/Tiles/2.png");
tile3img = loadImage("images/Tiles/3.png");
tile4img = loadImage("images/Tiles/4.png");
tile5img = loadImage("images/Tiles/2.png");
tile6img = loadImage("images/Tiles/5.png");
tile7img = loadImage("images/Tiles/6.png");



}


function setup(){
createCanvas(1600,950);
bg = createSprite(800,475);
bg.addImage(bgimage);
bg.scale = 2; 

ground=createSprite(800,940,1600,20);

boy = createSprite(100,600,10,10);
boy.addAnimation("running",boyStanding)
boy.scale = 0.3;

tile1=createSprite(300,810,10,10);
tile1.addImage(tile1img);
tile1.scale=0.6
tile1.debug=true;

tile2=createSprite(50,300,10,10);
tile2.addImage(tile2img);
tile2.scale=0.6
tile2.debug=true;

tile3=createSprite(102,860,10,10);
tile3.addImage(tile3img);
tile3.scale=0.6
tile3.debug=true;

tile4=createSprite(900,100,10,10);
tile4.addImage(tile4img);
tile4.scale=0.6
tile4.debug=true;

tile5=createSprite(100,500,10,10);
tile5.addImage(tile1img);
tile5.scale=0.6
tile5.debug=true;

tile6=createSprite(100,60,10,10);
tile6.addImage(tile2img);
tile6.scale=0.6
tile6.debug=true;

tile7=createSprite(25,860,10,10);
tile7.addImage(tile2img);
tile7.scale=0.6
tile7.debug=true;

tile8=createSprite(25,930,10,10);
tile8.addImage(tile7img);
tile8.scale=0.6
tile8.debug=true;

tile9=createSprite(100,930,10,10);
tile9.addImage(tile7img);
tile9.scale=0.6
tile9.debug=true;
 




}

function draw(){
background("black");

if(keyWentDown(RIGHT_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityX=5;
    
}
if(keyWentUp(RIGHT_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityX=0;
    
}
if(keyWentDown(LEFT_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityX=-5;
    
}
if(keyWentUp(LEFT_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityX=0;
    
}
if(keyWentDown(UP_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityY=-5;
    
}
if(keyWentUp(UP_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityY=0;
    
}
if(keyWentDown(DOWN_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityY=5;
    
}
if(keyWentUp(DOWN_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityY=0;
    
}
if(keyDown("space")){
    boy.velocityY = -10;
}

boy.velocityY = boy.velocityY+0.8;


edges=createEdgeSprites();
boy.collide(tile1)
boy.collide(tile2)
boy.collide(tile3)
boy.collide(tile4)
boy.collide(tile5)
boy.collide(tile6)
boy.collide(tile7)
boy.collide(edges);
boy.collide(ground);
drawSprites();
}