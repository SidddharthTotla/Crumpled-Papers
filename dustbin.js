class dustbin {
    constructor(x, y, width, height) {
      var options = {
          
          'restitution':0,
          'friction':1,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
  
      fill(255,55,55);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };
  