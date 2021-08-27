
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:3,
		friction:0,
		density:1.2
	}

	ball = new Ball(100,300,30);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,300,20,200);
	leftSide2 = new Ground(1300,300,20,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ball.show();
  groundObj.show();
  leftSide.show();
  leftSide2.show();
  keyPressed();
  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.005,y:0});
  }

  function keyPressed(){
	  if (keyCode === UP_ARROW){
		  hForce();
	  }
  }