var space, spaceimg;
var jet, jetimg;
var fuel, fuelimg;
var ast, astimg;
var iGround;
var laser, laserimg;

function preload(){
  spaceimg = loadImage("space.jpg");
  jetimg = loadImage("jet.png");
  fuelimg = loadImage("fuel.webp");
  astimg = loadImage("asteroid.jpeg");
  laserimg = loadImage("laser.png");
  
}




function setup() {
  createCanvas(1080, 800);
  space = createSprite(540,400);
  space.addImage("space",spaceimg)
  space.scale = 1.2

  space.velocityX = -5

  

  jet = createSprite(110,266);
  jet.addImage("jet",jetimg);
  jet.scale = 0.2

  laser = createSprite(jet.x, jet.y);
  laser.addImage("laser",laserimg);
  laser.scale = 0.8
  laser.visible = false;
  

  iGround = createSprite(500,790,1080,5)
  iGround.visible = false;

  

  fuel = createSprite(200,200)
  fuel.addImage("fuel",fuelimg)
  fuel.scale = 0.2

  ast = createSprite(350,350)
  ast.addImage("ast",astimg)
  ast.scale = 0.4
  
  
 
}

function draw() {
  background(0);
  
  if(space.x < 350){
    space.x = width/2
    
  }

  jet.velocityY = jet.velocityY + 0.8
  ast.velocityX = ast.velocityX - 3

  setTimeout(function(){
    ast.velocityX = ast.velocityX - 3
  })

  if (keyDown("up") && jet.y >= 150){
    jet.velocityY = -10;

  }

  jet.collide(iGround);

  
  

  if(keyDown("space")){
    laser.visible = true;
    laser.velocityX = 50
    setTimeout(function(){
      laser.x = jet.x;
      laser.y = jet.y;
      laser.visible = false;
    },400)

  }




  
  drawSprites()
  
  
}





