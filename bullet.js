/**
 *  Bulletクラス
 *
 * 　引数：　幅、高さ、x移動速度, y移動速度
 * 　　　　　移動速度は下方向はプラス、上方向はマイナスの値
 **/

class Bullet extends enchant.Sprite{
	constructor(w,h,xspeed,yspeed){
		super(w,h);
		this.xspeed=xspeed;
		this.yspeed=yspeed;
	}

	process(){
		this.y+=this.yspeed;
		this.x+=this.xspeed;
		if(this.y<this.height || this.y>game.height){   //画面から出た
			game.rootScene.removeChild(this);
		}
	}
}
