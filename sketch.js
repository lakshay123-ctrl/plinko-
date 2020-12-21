const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(120,750,480,20);


}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  ground.display();

  drawSprites();
}