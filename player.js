/**
 *  Playerオブジェクト
 *
 */

class Player extends enchant.Sprite{
    constructor(){
        super(40,40);

 	    this.image=game.assets['images/mychara0.png'];
	    this.x=300;
	    this.y=700;
	    this.scaleX=1.5;
	    this.scaleY=1.5;
	    this.speed=16;

	    this.bullets=0;

	    this.onenterframe=function(){
	    	if (game.input.right && this.x<game.width-this.width){
		    	this.x+=this.speed;
		    }

		    if (game.input.left && this.x>0){
			    this.x-=this.speed;
	    	}

    		if (game.input.up && this.y>300){
    			this.y-=this.speed;
    		}
	    	if (game.input.down && this.y<game.height-32){
	    		this.y+=this.speed;
	    	}

	    	if (game.input.a){
	    		//ここに自機の弾の発射処理を書く
          if(this.bullets<10){
              var newPlayerBullet=new PlayerBullet(this.x, this.y-16, -32);
              game.rootScene.addChild(newPlayerBullet);
              this.bullets++;
          }
	    	}
    	};
    }
}
