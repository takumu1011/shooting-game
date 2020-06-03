  /* Enemy6 */
class Enemy6 extends Enemy{
    constructor(x,y){
        super(64,64,x,y);
       	this.image=game.assets['images/space1.png'];
				this.hitpoint=20;
	    	this.frame=0;
	    	this.x=x;
	    	this.y=y;
        this.maxY=400+Math.random()*100;

	    	this.think=function(){
					if(this.y<this.maxY){
            this.y+=4;
					}
	    	};
    }
}
