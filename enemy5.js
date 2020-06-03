  /* Enemy5 */
class Enemy5 extends Enemy{
    constructor(x,y){
        super(32,32,x,y);
       	this.image=game.assets['images/space2.png'];
	    this.frame=0;
	    this.x=x;
	    this.y=y;

	    this.think=function(){
                      this.y+=8;
                      if(this.age%40==10){
                        var neb1=new EnemyBullet2(this.x,this.y+16, -16, 16);
                        game.rootScene.addChild(neb1);
                        var neb2=new EnemyBullet2(this.x, this.y+16, -8, 16);
                        game.rootScene.addChild(neb2);
                        var neb3=new EnemyBullet2(this.x, this.y+16, 0, 16);
                        game.rootScene.addChild(neb3);
                        var neb4=new EnemyBullet2(this.x, this.y+16, 8, 16);
                        game.rootScene.addChild(neb4);
                        var neb5=new EnemyBullet2(this.x, this.y+16, 16, 16);
                        game.rootScene.addChild(neb5);
                      }

	    };
    }
}
