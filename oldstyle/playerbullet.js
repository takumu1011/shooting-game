/**
 * PlayerBullet
 *
 * 	自機の弾丸
 **/

 function PlayerBullet(x,y,speed){
	this.__proto__=Bullet.prototype;
	Bullet.apply(this,[17,17,0, speed]);
	this.super=Bullet.prototype;

	this.image=game.assets['images/myshot.png'];
	this.x=x;
	this.y=y;

  this.onremovedfromscene=function(){
      player.bullets--;
  };

	this.onenterframe=function(){
		//Bulletオブジェクトのonenterframeを呼び出す
		this.super.onenterframe.call(this);
		//PlayerBulletの独自処理をこの後に書く

    var numChilds=game.rootScene.childNodes.length;
    for(var i=0; i<numChilds; i++){
       if (game.rootScene.childNodes[i].type==1){
       //if (game.rootScene.childNodes[i].prototype instanceof Sprite){
        console.log("enemy");
        if (this.within(game.rootScene.childNodes[i],25)){
          console.log("hit");
          game.rootScene.removeChild(game.rootScene.childNodes[i]);
          game.rootScene.removeChild(this);
          game.rootScene.addChild(new Explosion(this.x, this.y)); //爆発
          return;
        }
      }
    }

	};
 }
