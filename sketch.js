
var corredor
var corredor1
var cactus 
var gamestate
var PLAY
var FIN
var FIN2
var Restart
var Restart2
var suelo 
var suelo2
var score=0 
 function preload(){
corredor1=loadImage("corredor.gif");

FIN=loadImage("fin.png");
Restart=loadImage("restart.png");
suelo2=loadImage("ground2.png");
cactus1=loadImage("cactus.gif");


}
function setup()
{
 createCanvas(windowWidth,windowHeight);
 FIN2=createSprite(windowWidth/2,windowHeight/2,10,10)
 Restart2=createSprite(windowWidth/2,windowHeight/2+50,10,10)
 suelo=createSprite(windowWidth/2,windowHeight-windowHeight/40,windowWidth*2,windowHeight/40);//revisar espacio en blanco 
 suelo.addImage(suelo2);
 corredor=createSprite(windowWidth/12,windowHeight/5,20,50);
 corredor.addImage("running",corredor1,);
 corredor.scale=0.2;
 bordes=createEdgeSprites();
 var Z
 Z=Math.round(random(1,947))
 //console.log(Z)
 cactusjuntos=new Group();
 
 corredor.setCollider("circle",0,0,40);
 corredor.debug=true;
 console.log(windowWidth)
 console.log(windowHeight)
 FIN2.addImage(FIN);
 Restart2.addImage(Restart);
 FIN2.scale=0.5;
 Restart2.scale=0.5;
 FIN2.visible=false;
 Restart2.visible=false;

}
function draw()
{
 background("white");
 textSize(12);
 text("score "+score,20,20);

 if(gamestate==PLAY)
 {
    corredor.velocityY=corredor.velocityY+1;
    score=Math.round(getFrameRate()/55)+score
    suelo.velocityX=-(5+3*(score/100));
    if((touches.length>0||keyDown("space"))&&corredor.y>=windowHeight-windowHeight/40)
    {
     corredor.velocityY=-20;
     
     touches=[]
    }
    if(suelo.x<0)
    {
     suelo.x=displayWidth/2;
   
    }
    
    
    CACTUS();
    if(cactusjuntos.isTouching(corredor)){
        gamestate=END
        FIN2.visible=true;
        Restart2.visible=true;
        }
   
 }
 
  else if(gamestate==END){

  suelo.velocityX=0;
  cactusjuntos.setVelocityXEach(0);
  corredor.velocityY=0
  
   cactusjuntos.setLifetimeEach(-1)
   if(mousePressedOver(Restart2)){
    RESET();
   }
  }

   corredor.collide(bordes[3]);
   drawSprites();

}


    function RESET()
{
   gamestate=PLAY
   Reset2.visible=false
   FIN2.visible=false
   cactusjuntos.destroyEach();
   score=0
}
 function CACTUS()
{ if(frameCount%100==0)
    {
        cactus=createSprite(windowWidth-20,windowHeight-40,5,15);
        cactus.scale=0.2
        cactus.velocityX=-(8+3*(score/100));
     var rand=Math.round(random(1,1))   
     cactus.lifetime=windowWidth/cactus.velocityX;
     cactusjuntos.add(cactus)
     switch(rand)
     {
      case 1 : cactus.addImage(cactus1);
      
      
     }

                                                           
    }      
    



}
