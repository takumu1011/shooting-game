/**
 *
 * 敵キャラのオブジェクトをまとめて書くファイル
 *
 *
 **/


/**
 *  Enemyオブジェクト
 *
 * 　引数：　幅、高さ、x座標,　y座標
 * 　
 **/
 function Enemy(w,h,x,y){
	this.__proto__=Sprite.prototype;
	Sprite.apply(this,[w,h]);

	this.hitpoint=1;
	this.think;		//移動指向ルーチンが入る
	this.x=x;
	this.y=y;
  this.type=1;
	this.onenterframe=function(){
		this.think(); //移動ルーチンを実行
    if (this.y>game.height || this.y<this.height*-1){
      game.rootScene.removeChild(this);
    }

		if (this.within(player,30)){
			game.stop();
		}
	};
 }

 /* 単純に下がってくる敵 */
 function Enemy1(x,y){
	this.__proto__=Enemy.prototype;
	Enemy.apply(this,[32,32,x,y]);

	this.image=game.assets['images/space2.png'];
	this.frame=0;
	this.x=x;
	this.y=y;
	this.think=function(){
		this.y+=16;
	};
 }

 /* 2%の確率で撃ってくる敵 */
 function Enemy2(x,y){
	//this.__proto__=Enemy.prototype;
	Enemy.apply(this,[32,32,x,y]);

	this.image=game.assets['images/space2.png'];
	this.frame=0;
	this.x=x;
	this.y=y;
	this.think=function(){
		this.y+=16;
        if (Math.random()<=0.02){
            var neb=new EnemyBullet1(this.x, this.y+16, 24 );
            game.rootScene.addChild(neb);
        }
	};
 }
 
  function Enemy3(x,y){
	//this.__proto__=Enemy.prototype;
	Enemy.apply(this,[32,32,x,y]);

	this.image=game.assets['images/space2.png'];
	this.frame=0;
	this.x=x;
	this.y=y;
    
    this.dx=Math.floor(Math.random()*12+2);
    
	this.think=function(){
       this.moveBy(this.dx, 16);

       if (this.age%20==0){ this.dx*=-1; }     
 
       
        if (Math.random()<=0.04){
            var dy=16;
            var dx=(player.x-this.x)/dy;
            var neb=new EnemyBullet3(this.x, this.y+16, dx,dy);
            game.rootScene.addChild(neb);
        }
	};
 }
 
  /* 自機を追跡する敵 */
 function Enemy4(x,y){
	this.__proto__=Enemy.prototype;
	Enemy.apply(this,[32,32,x,y]);

	this.image=game.assets['images/space2.png'];
	this.frame=0;
	this.x=x;
	this.y=y;
	
	this.think=function(){
		this.y+=16;
		if (player.x>this.x){ this.x+=8; }
		if (player.x<this.x){ this.x-=8; }
	};
 }
 
