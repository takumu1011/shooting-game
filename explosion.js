/**
*   explosion.js
*   爆発するスプライト
**/

class Explosion extends enchant.Sprite{
  constructor(x,y){
    super(16,16);
    this.image=game.assets["images/effect0.png"];
    this.x=x;
    this.y=y;
    this.scaleX=2;
    this.scaleY=2;
    this.onenterframe=function(){
      this.frame++;
      if (this.frame==5){
        this.parentNode.removeChild(this);
      }
    };
    game.rootScene.addChild(this);
  }
}

