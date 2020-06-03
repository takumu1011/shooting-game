/**
 * EnemyBullet4
 *
 * 	敵の弾丸4
 *  
 **/

class EnemyBullet4 extends EnemyBullet{

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

 