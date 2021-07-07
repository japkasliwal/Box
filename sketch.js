var box


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
box.shapeColor="white"
}

function draw() 

{
  
background("gray")

if (keyIsDown(UP_ARROW)){
box.y=box.y-5


}
if (keyIsDown(DOWN_ARROW)){
  box.y=box.y+5
  
  
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x=box.x-5
    
    
    }
    if (keyIsDown(RIGHT_ARROW)){
      box.x=box.x+5
      
      
      }







      drawSprites()
}

