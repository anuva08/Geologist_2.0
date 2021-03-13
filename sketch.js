
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer (200,200,200,70);

	plane = new Plane (600,height,1200,40);

	stone = new Stone (200,300,80,80);

	rubber = new Rubber(300,300,50);

	sand1 = new Sand(300,390,5);
	sand2 = new Sand(310,390,5);
	sand3 = new Sand(310,390,5);
	sand4 = new Sand(315,390,5);
	sand5 = new Sand(320,390,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();

  plane.display();

  stone.display();

  rubber.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  drawSprites();
 
}



