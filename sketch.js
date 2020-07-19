
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,450,800,30);
	crumpledPaper = new Paper(50,200,35);
	dustbin1 = new dustbin(605,330,30,140);
	dustbin2 = new dustbin(445,330,30,140);
	dustbin3 = new dustbin(525,400,180,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  crumpledPaper.display();
  ground.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:185,y:-185})

	}
}


