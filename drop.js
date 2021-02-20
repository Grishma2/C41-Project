class Drop {
    constructor(x,y,r){
        var options={
            friction: 0.3,
            density: 0.1
        }

        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world,this.body);
    }

    showDrop(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}