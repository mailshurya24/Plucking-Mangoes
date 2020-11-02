class mango
{
    constructor(x,y,radius)
    {
        var options =
        {
            isStatic: true,
            density: 1.2,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x,y,radius/2.7,options);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world,this.body);

    }
    
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,30,30)
    }
}