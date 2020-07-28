class Paper{
    constructor(x,y,radius){
        var options = {
            
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.body =  Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
      //  this.height = height;
        this.image = loadImage("paper.png");
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
       
        //this.image = loadImage("paper.png");
        imageMode(CENTER);
       
        image(this.image, pos.x, pos.y,this.radius,this.radius);
        
    }
}