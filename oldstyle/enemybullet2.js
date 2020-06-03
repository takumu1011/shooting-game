/**
 * EnemyBullet2
 *
 * 	敵の弾丸
 *  (x,y)から発射し、毎フレームdx,dy分移動する
 **/

 function EnemyBullet2(x,y,dx,dy){
	EnemyBullet.apply(this,[x,y,0, 0]);

    this.dx=dx;
    this.dy=dy;
    
	this.onenterframe=function(){
        this.moveBy(dx,dy);
        EnemyBullet.prototype.onenterframe.call(this);
	};
 }
