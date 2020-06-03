/**
 *  Bulletクラス
 *
 * 　引数：　幅、高さ、x移動速度, y移動速度
 * 　　　　　移動速度は下方向はプラス、上方向はマイナスの値
 **/

 function Bullet(w,h,xspeed,yspeed){
	this.__proto__=Sprite.prototype;
	Sprite.apply(this,[w,h]);
	this.xspeed=xspeed;
	this.yspeed=yspeed;
 }
 //継承可能にするため少し違う方法でonenterframeを定義
 Bullet.prototype.onenterframe=function(){
		this.y+=this.yspeed;
		this.x+=this.xspeed;
		if(this.y<this.height || this.y>game.height){   //画面から出た
			game.rootScene.removeChild(this);
		}
};
