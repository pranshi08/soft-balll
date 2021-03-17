
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



	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  option();
  keypressed();
  
  drawSprites();
 
}
function option(){
var options ={
	isstatic : false,
	restitution : 0.3,
	frictionn : 0.5,
	density : 1.2,
}
}
function keypressed(){
	if (keyCode === UP_Arrow){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}



