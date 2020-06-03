/**
 * EnemyBullet5
 *
 * 	敵の弾丸5
 *  
 **/

class EnemyBullet5 extends EnemyBullet{

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

 