var bullet,wall;
var speed,weight,thickness;
var obj1,obj2 

function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
 bullet = createSprite(50,200,60,30)
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = rgb(80,80,80)
 bullet.velocityX = speed
}

function draw() {
  background(0);
 if(ifColliding(wall,bullet)){
  bullet.velocityX = 0 
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage<10){
    bullet.shapeColor = rgb(0,255,0)
  }
  if(damage>10){
    bullet.shapeColor = rgb(255,0,0)
  }
 }
  
  drawSprites();
}

function ifColliding(obj1,obj2){

  if(obj1.x - obj2.x < (obj2.width+obj2.width)/2){
    return true;
  }else{
    return false;
  }
}