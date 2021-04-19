class Bullet{
    constructor(x,y){
        var options = {
            isStatic: false,
            density:0.0000000000001,
            friction:0.00000000001

        }
        this.x = x;
        this.y = y; 
        this.body = Bodies.circle(980, 500, 50, options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
       //translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("yellow")
        ellipse(pos.x, pos.y, 50, 50)
        
        //imageMode(CENTER);
       // image(this.image, 0, 0, 100, 100);
        pop();
    }
}