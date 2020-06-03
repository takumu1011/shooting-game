/**
 * EnemyBullet1
 *
 * 	敵の弾丸
 *  (x,y)から発射し下に移動する
 **/

 function EnemyBullet1(x,y,yspeed){
	EnemyBullet.apply(this,[x,y,0, yspeed]);
      
	this.onenterframe=function(){
      EnemyBullet.prototype.onenterframe.call(this);
	};
 }
 