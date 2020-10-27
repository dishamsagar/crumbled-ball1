
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dustbin,ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	ball = new Paper(100,200,20);

	dustbin = new Dustbin(680,560);
	ground = new Ground(400,580,800,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ball.display();
  ground.display();
  console.log(ball.body.position.y);
    drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15, y:-15});
	}
}



