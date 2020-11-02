class launcher
{
    constructor(bodyA,bodyB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 2
        }
        this.bodyA = bodyA;
        this.pointB = bodyB;
        this.launcherOB = Constraint.create(options);
        World.add(world,this.launcherOB);
    }
   attach(body)
    {
        this.launcherOB.bodyA = body;
    }

    fly()
    {
        this.launcherOB.bodyA = null;  
    }
}
