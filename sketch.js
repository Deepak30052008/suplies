var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true
	}
   	var packageBody_options={
		restitution:0.3,
		isStatic:true
	   }
	packageBody = Bodies.circle(400 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);
	ground = Bodies.rectangle(400, 575, 800, 10 , ground_options );
 	World.add(world, ground);
	Engine.run(engine);
}
function draw() {
  background("black")

  Engine.update(engine)
ellipseMode(RADIUS)
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;
    rectMode(CENTER)
	rect(ground.position.x,ground.position.y,800,10)
  drawSprites();
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
  Matter.Body.setStatic(packageBody,false);                  
  }
}