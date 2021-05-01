const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
skyImage = loadImage("bg.png");
sun = loadImage("sun.png")
}

function setup() {
  createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(600, 600, 1200, 20);
    ground2 = new Ground(1100, 400, 100, 10);

    
    block1 = new Block(900, 100, 70, 70);
    block2 = new Block(900, 100, 70, 70);
    block3 = new Block(900, 100, 70, 70);
    block4 = new Block(900, 100, 70, 70);
    block5 = new Block(900, 100, 70, 70);
    block6 = new Block(900, 100, 70, 70);
    block7 = new Block(800, 100, 70, 70);
    block8 = new Block(800, 100, 70, 70);
    block9 = new Block(800, 100, 70, 70);
    block10 = new Block(800, 100, 70, 70);
    block11 = new Block(800, 100, 70, 70);
    block12 = new Block(800, 100, 70, 70);
    block13 = new Block(700, 100, 70, 70);
    block14 = new Block(700, 100, 70, 70);
    block15 = new Block(700, 100, 70, 70);
    block16 = new Block(700, 100, 70, 70);
    block17 = new Block(700, 100, 70, 70);
    block18 = new Block(700, 100, 70, 70);
    block19 = new Block(700, 100, 70, 70);
    block20 = new Block(700, 100, 70, 70);
    block21 = new Block(600, 100, 70, 70);
    block22 = new Block(600, 100, 70, 70);
    block23 = new Block(600, 100, 70, 70);
    block24 = new Block(600, 100, 70, 70);
    block25 = new Block(600, 100, 70, 70);
    block26 = new Block(600, 100, 70, 70);

    superman = new Superman(120, 200, 450, 200)
    monster = new Monster(1100, -10, 200, 200, { isStatic: false });
    launcher = new Launcher(superman.body, {x:120, y:200})
}

function draw() {
  background(skyImage);

  fill("red");
  textSize(30);
  text("Drag The Mouse To Move Superman And Kill The Monster!!", 30, 30);
  image(sun, 1200, 10, 100, 100);

  ground.display();
  ground2.display();
  superman.display();
  launcher.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster.display();
  Engine.update(engine);
  
}

function mouseDragged() {
  Matter.Body.setPosition(superman.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcher.fly();
}
