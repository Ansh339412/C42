const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var batman;
var thunder,thunderimg;

 function preload(){
  thunderimg = loadImage("thunder1.png"); 
  thunderimg2 = loadImage("thunder2.png");
 }
function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(950,500);
 batman = new Batman(400, 400, 225);
 thunder = createSprite(600,5,10,40);
 thunder2 = createSprite(250,2,10,10);

}

function draw() {
  background("black");
  batman.display(); 

  if(frameCount % 1 === 0){
     var raindrop = new RainDrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }
  if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunder.addImage(thunderimg);
               thunder.scale = 2;
                break;
        case 2:thunder.addImage(thunderimg2);
               thunder.scale = 1.3;
                break;
         default: break;
      }
    }   
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunder2.addImage(thunderimg2);
                 thunder2.scale = 2;
                  break;
          case 2:thunder2.addImage(thunderimg);
                 thunder2.scale = 1.7;
                  break;
           default: break;
        }
      }   

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
  drawSprites();
}