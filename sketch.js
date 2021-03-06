var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite1 = createSprite(270, 645, 20, 100);

	groundSprite1.shapeColor = color(255, 0, 0)

	groundSprite2 = createSprite(370, 669, 200, 20);

	groundSprite2.shapeColor = color(255, 0, 0)

	groundSprite3 = createSprite(470, 645, 20, 100);

	groundSprite3.shapeColor = color(255, 0, 0)

	groundSprite4 = createSprite(400, 690, 800, 25);

	groundSprite4.shapeColor = color(255, 255, 0)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Body.setStatic(packageBody,false);
	  }

	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20; 
		translation= {
			x:20, y:0
		} 
		Body.translate(packageBody, translation)
	  }

	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 20; 
		translation= {
			x:-20, y:0
		} 
		Body.translate(packageBody, translation)
	  }  
}



