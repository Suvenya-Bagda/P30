class Ground{
    constructor(){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(0,890,900,20,options);
    this.width=width,
    this.height=height
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
   fill("brown");
   rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    }
}