class Monster {
  constructor(x, y, width, height) {
    var options = {
      density: 1,
      restitution: 0.8,
      frictionAir: 0.01,
    };
    this.image = loadImage("Monster-01.png");
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    scale(1.3)
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
