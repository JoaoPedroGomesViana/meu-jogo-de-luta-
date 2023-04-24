const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
meninacorrendo = loadImage("C0.png")
  
}
 
 
function setup() {
  createCanvas(800,800);
menina= createSprite(400,400)
//menina.loadAnimation("correndo",meninacorrendo)
menina.addImage(meninacorrendo)
menina.scale=0.5
  engine = Engine.create();
  world = engine.world;

 
 

 
}
 
 
function draw() {
  background("blue");
  drawSprites()
}
 

