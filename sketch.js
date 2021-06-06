const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hexagon;

function preload() {
   
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    

    hexagon = new Hexagon(200,200,50,50);
    
    world = engine.world;
}

function draw(){
    background("black");
    //drawSprites;

    hexagon.display();
}
