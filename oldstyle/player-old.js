/**
 *  Playerオブジェクト
 *
 */

/**
 * Spriteオブジェクトを「継承」する方法：
 * 　　this.__proto__=Sprite.prototype;
 * 	   Sprite.apply(this,[40,40]);   [ ]の中にnewする際の引数を列挙する
 **/


function Player(){
	this.__proto__=Sprite.prototype;
	Sprite.apply(this,[40,40]);

	this.image=game.assets['images/mychara0.png'];
	this.x=300;
	this.y=700;
	this.scaleX=1.5;
	this.scaleY=1.5;
	this.speed=16;

	this.bullets=0;

	//フレームごとの自機の処理
	this.onenterframe=function(){
		if (game.input.right && this.x<game.width-this.width){
			this.moveBy(this.speed,0);
		}

		if (game.input.left && this.x>0){
			this.moveBy(this.speed*-1,0);
		}

		if (game.input.up && this.y>300){
			this.moveBy(0,this.speed*-1);
		}
		if (game.input.down && this.y<game.height-32){
			this.moveBy(0,this.speed);
		}

		if (game.input.a){
			console.log("DEBUG: shot");
			if (this.bullets<10){
				var newPlayerBullet=new PlayerBullet(this.x,this.y-16,-32);
				game.rootScene.addChild(newPlayerBullet);
				this.bullets++;
			}
		}
	};

}
