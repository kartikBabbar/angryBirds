const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    pig1= new Pig(800,320);
    log1= new Log(800,250,300,PI/2);
    box3 = new Box(700,230,70,70);
    box4 = new Box(900,230,70,70);
    box5 = new Box(800,180,70,70);
    pig2= new Pig(800,230);
    log2= new Log(800,200,300,PI/2);
    log3= new Log(760,150,200,PI/5);
    log4= new Log(860,150,200,-PI/5);
    bird= new Bird(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}