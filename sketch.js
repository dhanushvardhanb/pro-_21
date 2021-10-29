
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var wall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.3,
		friction:0,
	}
 var ground_options={
	 isStaic:true
 };

 	//Create the Bodies here
  
 paper=new paper(100,600,10)	
	
	
	
 ground=Bodies.rectangle(500,100,10,18,ground_options);
  World.add(world,ground);
  wall=Bodies.rectangle(400,150,10,15,ground_options);
  World.add(world,wall);
  ball=Bodies.circle(700,10,20,ball_options);
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

ellipse(ball.position.x,ball.position.y,30);
rect(ground.position.x,ground.position.y,1200,20);
ellipse(rock.position.x,ground.position.y,40);
rect(wall.position.x,wall.position.y,2100,10);
 
drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyFroce(paper.body,paper.body,position,{x:15,y:-10})
	}
}


