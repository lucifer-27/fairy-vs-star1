class Star{
    constructor(x,y,width,height){
        // var option = {
        //     isStatic : true
        //  }
        this.body = Bodies.rectangle(x, y,20,20);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("images/star.png");
        World.add(world,this.body);
    }
    display(){
        push();
        // this.body.position.x=mouseX;
        // this.body.position.y=mouseY;
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}