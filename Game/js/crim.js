class Criminal{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y; 
        this.image = loadImage("images/criminal.png")
        this.body = Bodies.rectangle(this.x, this.y, 100, 100, options)
        World.add(world, this.body)
    }
    updateX(){ 
        if (this.body.position.x > 200 ){
        Matter.Body.setPosition(this.body, {x:random(0,1250), y:random(0,600) })
        }
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);

        pop();
    }
}
//criminalSpawn(){
    //if (frameCount % 40){
              
 
