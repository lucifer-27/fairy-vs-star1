const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var Fairy;
var Stars;
function preload()
{
   //preload the images here
   bg = loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;
  
 

  Fairy = new fairy(100,600);
  Stars = new Star(700,150);
}   


function draw() {
  background(bg);
  Engine.update(engine);
  Fairy.display();
  Stars.display();
 
  
   
  drawSprites();
  
}
