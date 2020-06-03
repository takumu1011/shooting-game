/**
 * EnemyBullet1
 *
 * 	敵の弾丸
 *  (x,y)から発射し下に移動する
 **/

class EnemyBullet1 extends EnemyBullet{

	constructor(x,y,yspeed){
		super(x,y,0,yspeed);
		this.onenterframe=function(){
      		this.process();
		};
	}

	process(){
		super.process();
	}
	
}

 