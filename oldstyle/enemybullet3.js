/**
 * EnemyBullet3
 *
 * 	敵の弾丸
 *  (x,y)から発射し、自機を追跡する
 **/

 function EnemyBullet3(x,y,dx,dy){
	EnemyBullet.apply(this,[x,y,0, dy]);
    
	this.onenterframe=function(){
        if (player.x>this.x){ this.moveBy(4,0); console.log("1")}
        if (player.x<this.x){ this.moveBy(-4,0); console.log("2")}
        EnemyBullet.prototype.onenterframe.call(this);
	};
 }
