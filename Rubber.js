class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.6,
          'friction':5.0,
          'density':2
      }
     this.body = Matter.Bodies.circle(x, y,radius, options);
      this.radius = radius;
           
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
       fill("blue");
       ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  