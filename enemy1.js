 /* 単純に下がってくる敵 */
class Enemy1 extends Enemy{
	constructor(x,y){
		super(32,32,x,y);
		this.image=game.assets['images/space2.png'];
		this.frame=0;
		this.x=x;
		this.y=y;
	 this.yspeed=Math.floor(Math.random()*21+4);
	 if(game.frame>400){    //400フレームを超えるとスピードが1.5倍
		 this.yspeed*=1.5;
	 }
		this.hitpoint=1;
		this.think=function(){
							this.y+=this.yspeed;  //4から24の速度
							


		};
	}
}
