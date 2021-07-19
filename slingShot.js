class Slingshot {
   constructor(bodyA,pointB) {
       var options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness: 10,
           length:5
       }

       this.body = Constraint.create(options);
       this.pointB = pointB;
       World.add(world,this.body);
   }

   attach(body) {
     this.body.bodyA = body;
     Matter.Body.setPosition(stone.body,{x:boy.x,y:boy.y});
   }

   fly() {
     this.body.bodyA = null;
   }

   display() {
     if(this.body.bodyA) {
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      push();
       stroke(0,0,0);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
     }
   }
}