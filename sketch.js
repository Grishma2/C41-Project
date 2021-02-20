const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var rand;
var maxDrops = 100;
var thunder1Img, thunder2Img, thunder3Img, thunder4Img;
var thunderCreatedFrame = 0
var thunder;

function preload(){
   thunder1Img = loadImage("proc41images/images/thunderbolt/1.png");  
   thunder2Img = loadImage("proc41images/images/thunderbolt/2.png");   
   thunder3Img = loadImage("proc41images/images/thunderbolt/3.png");   
   thunder4Img = loadImage("proc41images/images/thunderbolt/4.png");    
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,200);
   
   if(frameCount%150===0){
      for(var i = 0; i<maxDrops; i++){
         drops.push(new Drop(random(0,400), random(0,400)));
      }
   }
}

function draw(){
   canvas = createCanvas(400,400);
   background(0);

   umbrella.display();

   rand = Math.round(random(1,4)); 
   if(frameCount%80 === 0 && frameCount<240){
      thunderCreatedFrame = frameCount
      thunder = createSprite(random(10,370), random(10,30),10,10);
      switch(rand){
         case 1: thunder.addImage(thunder1Img);
         break;
         case 2: thunder.addImage(thunder2Img);
         break;
         case 3: thunder.addImage(thunder3Img);
         break;
         case 4: thunder.addImage(thunder4Img);
         break;
      } 

      if(frameCount>240){
         thunder.visibility = false;
      }
   }

   for(var i=0; i<maxDrops; i++){
      drops[i].showDrop();
   }
   
    Engine.update(engine);
    drawSprites();
}   

