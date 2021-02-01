const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,200,50,50)
    ground = new Ground()
    box2 = new Box(220,100,50,50)
    
}

function draw(){
    background(0);
    Engine.update(engine);

    box.display()
    ground.display()
    box2.display()
}