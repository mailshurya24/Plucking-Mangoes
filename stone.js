class stone
{
    constructor(x,y,radius)
    {
        var options =
        {
            isStatic: false,
            density: 1.2,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x,y,radius/2.5,options);
        this.radius = radius;
        imageMode(CENTER);
        this.image = loadImage("stone.png");
        
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,22,22);
    }
}