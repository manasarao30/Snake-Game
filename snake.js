//3A constructor function
function Snake()
{
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;

    this.total=0;//current size 0
    this.tail=[];

    //function below tells whether or not the snake reached the food
    //if it is true-go to s.eat(food) function 
    this.eat=function(pos) //will receive a position of where the food is
    {
      let d=dist(this.x,this.y,pos.x,pos.y);//distance of where the snake is to where the food is
      if(d<1)//if dist less than 1 px return true
      {
          this.total++;//if snake eats the food total should go up by one
          return true;
      }
      else
      {
          return false;
      }
    };

    //receive 2 values x and y and set their direction
    this.dir=function(x,y)
    {
        this.xspeed=x;
        this.yspeed=y;
    };

    this.death=function()
    {
        //checks if head is connected to any of its body
        for(let i=0;i<this.tail.length;i++)//loop through every part in the tail
        {
            let pos=this.tail[i];
            let d=dist(this.x,this.y,pos.x,pos.y);
            if(d<1)
            {
                console.log('Starting over');
                this.total=0;
                this.tail=[];
            }
        }
    };

    //an update function-x value changes by xspeed value,same goes with y
    this.update=function()
    {
        for(let i=0;i<this.tail.length-1;i++)
        {
            this.tail[i]=this.tail[i+1];
        }
        if(this.total>=1)
        {
            this.tail[this.total-1]=createVector(this.x,this.y);
        }
       


        this.x=this.x+this.xspeed*scl;
        this.y=this.y+this.yspeed*scl;

        //our snake is too fast-so constrain the speed-also width-scl and height-scl so that our snake stays within the canvas
        this.x=constrain(this.x,0,width-scl);
        this.y=constrain(this.y,0,height-scl);

    };

    //makes a white rectangle with x and y value
    this.show=function()
    {
        fill(255);
        for(let i=0;i<this.tail.length;i++)//draw a rectangle at  its tail
        {
            rect(this.tail[i].x,this.tail[i].y,scl,scl);
        }
        rect(this.x,this.y,scl,scl);
    }
}