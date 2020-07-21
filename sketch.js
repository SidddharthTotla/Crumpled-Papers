
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dbImage = loadImage("dustbin.png");
	paperImage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);

	dustbinImg = createSprite(525,380,20,20);
	dustbinImg.addImage("db1",dbImage);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,450,800,30);
	crumpledPaper = new Paper(50,200,35);
	
	dustbin1 = new dustbin(605,340,30,140);
	dustbin1.body.isStatic = true;
	dustbin2 = new dustbin(445,340,30,140);
	dustbin2.body.isStatic = true;
	dustbin3 = new dustbin(525,420,180,30);
	dustbin3.body.isStatic = true;

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


