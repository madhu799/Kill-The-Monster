class Monster{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        restitution:0.5,
        friction:1.0
    }
    this.body= Bodies.rectangle(x,y,width,height, options);
    this.body.width= width;
    this.body.height= height;
    this.image= loadImage("pro-c34+images/images/Monster-01.png")
    World.add(world, this.body);
    }


    display(){
        var angle= this.body.angle;
        var pos= this.body.position;
        push ();
        translate (this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image (this.image, 0,0,this.width, this.height);
        pop ();
    }

}




