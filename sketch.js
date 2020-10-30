
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,dustbin3,trash;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.
    
	ground = new Ground(400,680,800,20);
	dustbin1 = new Dustbin(400,640,10,65);
	dustbin2 = new  Dustbin(500,640,10,65);
	dustbin3 = new Dustbin(450,665,90,10);
    trash = new Trash(23,23,35);
}


function draw() {
	
  background(0);
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  ground.display();
  trash.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	
	  Matter.Body.applyForce(trash.body,trash.body.position,{x:23,y:-108})
	
	}
	
	
	}

