
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boyImg,boy;
var Ground;
var Stone,StoneImg;
var Tree,TreeImg;
var mango1,mango2,mango3,mango4,mango5,MangoImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(500,700,1000,15)
	Stone = new stone(198,570,50);
	Tree = new tree(800,400,10,10);
	mango1 = new mango(789,324,25);
	mango2 = new mango(763,260,25);
	mango3 = new mango(943,338,25);
	mango4 = new mango(880,312,25);
	mango5 = new mango(702,324,25);
	mango6 = new mango(748,369,25);
	mango7 = new mango(840,200,25);
	mango8 = new mango(819,278,25);

	launcherObj = new launcher(Stone.body,{x:190,y:570});
	
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  boy = image(boyImg,260,630,250,250);
  
  Engine.update(engine);


  Ground.display();
  Tree.display();
  Stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 

  detectCollision(Stone,mango1);
  detectCollision(Stone,mango2);
  detectCollision(Stone,mango3);
  detectCollision(Stone,mango4);
  detectCollision(Stone,mango5);
  detectCollision(Stone,mango6);
  detectCollision(Stone,mango7);
  detectCollision(Stone,mango8);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY});
  }
  
  
  function mouseReleased()
  {
	  launcherObj.fly();
  }
  

function detectCollision(lstone,lmango)
{
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed()
{
  if(keyCode === 32)
  {
    launcherObj.attach(Stone.body);
  }
}