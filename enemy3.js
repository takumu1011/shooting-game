/**
 *  20フレーム（2秒）ごとに、左右の方向を変えながら斜めに下がってくる敵
 *      this.dxに、速度を準備（定数または乱数で2-10）
 *      20の倍数フレームで、-1を掛けて逆転させる
 */

class Enemy3 extends Enemy{

    constructor(x,y){
        super(32,32,x,y);

    	this.image=game.assets['images/space2.png'];
	    this.frame=0;
	    this.x=x;
	    this.y=y;

        //乱数を使って速度を準備し記憶しておく
        this.dx=Math.floor(Math.random()*12+2);

	    this.think=function(){
            this.x+=this.dx;
            this.y+=16;

            if (this.age%20==0){ 
                this.dx*=-1;
            }     
 
            if (Math.random()<=0.04){
                var dy=16;
                var dx=(player.x-this.x)/dy;
                var neb=new EnemyBullet3(this.x, this.y+16, dx,dy);
                game.rootScene.addChild(neb);
            }
	    };
    }
}
