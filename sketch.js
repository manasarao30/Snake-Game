let s;//variable snake
//step 1-create a canvas

let scl=20;//scale variable-size of snake
let food;
function setup()
{
    createCanvas(600,600);
    s=new Snake();
    frameRate(10);//speed of the snake
    //vector-quick and easy way to store both x and y
    pickLocation();

}


function pickLocation()
{
 //no of columns=width of window/scale
 let cols=floor(width/scl);
 let rows=floor(height/scl);
 //consider your canvas being divided into grids say 0123
 //                                                  4567
 //your food randomly picks a location
 food=createVector(floor(random(cols)),floor(random(rows)));
 //when the snake eats your food it expands 
 food.mult(scl);

}

function mousePressed()
{
    s.total++;
}

//2
function draw()
{
    background(51);
   
//function where the snake eats the food
//if snake eats the food pick a new location
    if(s.eat(food))
    {
        pickLocation();
    }; 
    s.death();
    s.update();
    s.show();
    fill(255,0,100);//colour of food
    rect(food.x,food.y,scl,scl);//size of food
}
function keyPressed()
{
    if(keyCode===UP_ARROW)
    {
        s.dir(0,-1);//set direction 0-x axis,-1->up
    }
    else if(keyCode===DOWN_ARROW)
    {
        s.dir(0,1);
    }
    else if(keyCode===RIGHT_ARROW)
    {
        s.dir(1,0);
    }
    else if(keyCode===LEFT_ARROW)
    {
        s.dir(-1,0);
    }

}
