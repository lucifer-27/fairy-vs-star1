class fairy {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
         }
        this.body = Bodies.rectangle(x, y,400,400,option);
        this.width = 400;
        this.height = 400;
        this.image = loadImage("images/fairy1.png");
        World.add(world,this.body);
    }
    display(){
        push();
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}