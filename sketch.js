const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1,box2,box3;
var ceiling, ball;
var rope;
var backgroundIMG;


function preload() {
    backgroundIMG = loadImage("pro-c34+images/images/GamingBackground.png");

}

function setup(){
    createCanvas(900,600)
    superhero = new Superhero(200,200);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,30);
    box1= new Box(700,300);
    box2= new Box(700,250);
    box3= new Box(700,200);
    ceiling= new Ground(600,10,1200,30);
}

function draw(){
     background(backgroundIMG);
     Engine.update(engine);
     ground.display()
     box1.display();
     box2.display();
     box3.display();
     ceiling.display();
superhero.display()     
}

function mouseDragged(){
  
}



   