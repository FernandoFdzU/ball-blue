var blue;
function setup() {
  createCanvas(400,400);
  blue = createSprite(100,50,20,10);
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
blue.position.x= blue.position.x+5;
}
if(keyIsDown(LEFT_ARROW)){
blue.position.x= blue.position.x-5;  
}
drawSprites();
}




