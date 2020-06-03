/**
 *  Enemyオブジェクト
 *
 * 　引数：　幅、高さ、x座標,　y座標
 * 　
 **/

class Enemy extends enchant.Sprite{

	constructor(w,h,x,y){
		super(w,h);
		this.hitpoint=1;
		this.think;		//移動思考ルーチンが入る変数
		this.x=x;
		this.y=y;
  		this.type=1;
		this.onenterframe=function(){
			this.think(); //移動ルーチンを実行
    		if (this.y>game.height || this.y<this.height*-1){
      			game.rootScene.removeChild(this);
    		}

			if (this.within(player,30)){
				game.replaceScene(gameoverScene);
				game.stop();
			}
		};
	}
}
