class Paper {

constructor(x,y,radius)
{
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:0.8
}

this.body=Bodies.circle(x,y,radius,options)
this.radius = radius
this.image = loadImage("crumpledPaperImage.png")     
circle(this.body.position.x, this.body.position.y, this.radius)

World.add(world, this.body)

}
display(){

ellipseMode(RADIUS)

image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)

}
}