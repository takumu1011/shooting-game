/**
 * EnemyBullet
 *
 * 	敵の弾丸の共通処理
 **/

function EnemyBullet(x,y,xspeed,yspeed){
	Bullet.apply(this,[17,17,xspeed,yspeed]);

	this.image=game.assets['images/enemyshot.png'];
	this.x=x;
    this.y=y; 
}
EnemyBullet.prototype.onenterframe=function(){
        Bullet.prototype.onenterframe.call(this);
        if (this.within(player,25)){ //自機に当たった
            game.replaceScene(gameoverScene);
            game.pause();
        }
};
