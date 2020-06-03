/**
 * PlayerBullet
 *
 * 	自機の弾丸
 **/

class PlayerBullet extends Bullet{

  constructor(x,y,speed){
    super(17,17,0,speed);
  	this.image=game.assets['images/myshot.png'];
  	this.x=x;
  	this.y=y;

    this.onremovedfromscene=function(){
      player.bullets--;
    };
  }

  onenterframe(){
    super.process();
    var numChilds=game.rootScene.childNodes.length;
    for(var i=0; i<numChilds; i++){
       if (game.rootScene.childNodes[i].type==1){
          if (this.within(game.rootScene.childNodes[i],25)){
              game.rootScene.childNodes[i].hitpoint--;
              if (game.rootScene.childNodes[i].hitpoint<1){
                game.rootScene.removeChild(game.rootScene.childNodes[i]);
                //この次の行に爆発処理を追加
                game.rootScene.addChild(new Explosion(this.x, this.y));
              }
              game.rootScene.removeChild(this);
              return;
          }
      }
    }
  }
}
