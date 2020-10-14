
var car, wall;

var speed, weight; 

function setup() {
  createCanvas(2000,400);

  speed = random(55,99);
  weight = random(400,1500);

  car = createSprite(100, 200, 40, 40);
  car.velocityX = speed;
  car.shapeColor =  (225);

  wall = createSprite(1000, 200, 25, 300);
}


function draw() {
  background(0);  

  //if(car.isTouching(wall)) {
    //car.velocityX = 0;
  //}

  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation < 100) {
      car.shapeColor = ("lightGreen");
    } 

    if(deformation > 100 && deformation < 180) {
      car.shapeColor = ("yellow");
    }

    if(deformation > 180) {
      car.shapeColor = ("red")
    }
  }

  drawSprites();

}