class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          visible:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(0);
      fill(135, 218, 242);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };