 /* 2%の確率で撃ってくる敵 */
class Enemy2 extends Enemy{

    constructor(x,y){
        super(32,32,x,y);
	    this.image=game.assets['images/space2.png'];
	    this.frame=0;
	    this.x=x;
	    this.y=y;
	    this.think=function(){
        //ここにEnemy2の思考を書く
        this.y+=16;
        
        if(Math.random()<=0.04 || this.age==20){
          var neb=new EnemyBullet1(this.x, this.y+16, 24);
          game.rootScene.addChild(neb);
        }

	    };
    }
}
