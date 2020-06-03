  /* 自機を追跡する敵 */
class Enemy4 extends Enemy{
    constructor(x,y){
        super(32,32,x,y);
       	this.image=game.assets['images/space2.png'];
	    this.frame=0;
	    this.x=x;
	    this.y=y;

	    this.think=function(){
		    this.y+=16;

			//ここにx座標を自機に近づける処理を書く
        if(this.x>player.x){this.x-=8;}
        if(this.x<player.x){this.x+=8;}
	    };
    }
}
