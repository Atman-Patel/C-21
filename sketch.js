var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(900, 400, 50, 80);
  gameObject1.shapeColor = "orange";

  gameObject2 = createSprite(700, 600, 60, 20);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(500, 350, 80, 80);
  gameObject3.shapeColor = "yellow";

  gameObject4 = createSprite(200, 400, 30, 60);
  gameObject4.shapeColor = "purple"

  gameObject3.velocityX = 4;
  fixedRect.velocityX = -4;
}

function draw() {
  background(0, 0, 0);
  gameObject4.x = World.mouseX;
  gameObject4.y = World.mouseY;

  if (isTouching(gameObject3, gameObject4)) {
    gameObject3.shapeColor = "white";
    gameObject4.shapeColor = "red";
  }
  else {
    gameObject3.shapeColor = "green";
    gameObject4.shapeColor = "red";
  }

  bounceOff(fixedRect, gameObject3);
  drawSprites();
}

