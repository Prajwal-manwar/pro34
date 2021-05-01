class Superman{
    constructor(x, y, width, height){
        var options = {
          density: 1,
          frictionAir: 1.5
        };
        this.image = loadImage("Superhero-02.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}