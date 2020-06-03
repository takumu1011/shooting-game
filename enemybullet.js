/**
 * EnemyBullet
 *
 * 	敵の弾丸の共通処理
 **/

class EnemyBullet extends Bullet{

    constructor(x,y,xspeed,yspeed){
        super(17,17,xspeed,yspeed);
	    this.image=game.assets['images/enemyshot.png'];
	    this.x=x;
        this.y=y; 
    }

    process(){
        super.process();
        if (this.within(player,25)){ //自機に当たった
            game.replaceScene(gameoverScene);
            game.pause();
        }
    }

}
