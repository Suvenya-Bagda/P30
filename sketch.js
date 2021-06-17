const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var engine, world, bodies;
var ball, polygon_img;

function preload(){
  poylgon_img=loadImage("polygon.png");
}

function setup(){
createCanvas(900,400);
 engine=Engine.create();
 world=engine.world;
 block1=new Block(300,275,30,40);
 block2=new Block(330,275,30,40);
 block3=new Block(360,275,30,40);
 block4=new Block(390,275,30,40);
 block5=new Block(420,275,30,40);
 block6=new Block(450,275,30,40);
 block7=new Block(480,275,30,40);

 block8=new Block(330,235,30,40);
 block9=new Block(360,235,30,40);
 block10=new Block(390,235,30,40);
 block11=new Block(420,235,30,40);
 block12=new Block(450,235,30,40);
 
 block13=new Block(360,195,30,40);
 block14=new Block(390,195,30,40);
 block15=new Block(420,195,30,40);

 block16=new Block(390,155,30,40);

 b1=new Block(640,175,30,40);
 b2=new Block(670,175,30,40);
 b3=new Block(700,175,30,40);
 b4=new Block(730,175,30,40);
 b5=new Block(760,175,30,40);

 b6=new Block(670,135,30,40);
 b7=new Block(700,135,30,40);
 b8=new Block(730,135,30,40);

 b9=new Block(700,95,30,40);

 stand1=new Stand(390,300,250,10);
 stand2=new Stand(700,200,200,10);
 //groundObject=new Ground();
 ball=Bodies.circle(50,200,20);
 World.add(world,ball);
 slingshot=new SlingShot(this.ball,{x:100,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the block", 100, 30);
    fill("skyBlue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("red");
    stand1.display();
    stand2.display();

    fill("skyBlue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("turquoise");
    b6.display();
    b7.display();
    b8.display();
    fill("pink");
    b9.display();
    //groundObject.display();
    fill("gold");
    //imageMode(CENTER);
    //image(polygon_img, ball.position.x, ball.position.y, 40, 40);
    ellipse(ball.position.x, ball.position.y, 40, 40);
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball);
    }
}