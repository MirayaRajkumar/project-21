class Ball 
{
  constructor(x, y, d) 
  {
    let options = {
      restitution: 0.5
    };
    
    this.body = Bodies.circle(x, y, d, options);
    this.d = d;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill("white");
    ellipse(pos.x, pos.y, this.d);
    pop();
  }
  
}


