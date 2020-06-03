/**
 * メインプログラム
 *
 * **/

    function main(){
        console.log("dEBUG: main() called.");

        game.keybind(90,'a');

        //ゲームオーバー画面を準備しておく
        gameoverScene=new Scene();
        var gos=new Sprite(189,97);
        gos.image=game.assets["images/gameover.png"];
        gos.y=400; gos.x=(game.width-gos.width)/2;
        gos.scaleX=1;gos.scaleY=1;
        gameoverScene.addChild(gos);

        //クリア画面
        gameclearScene=new Scene();
        var gcs=new Sprite(267,48);
        gcs.image=game.assets["images/clear.png"];
        gcs.y=400; gcs.x=(game.width-gcs.width)/2;
        gcs.scaleX=1;gcs.scaleY=1;
        gameclearScene.addChild(gcs);



       //背景の表示
        var map=new Map(32,32);
	    map.image=game.assets['images/avatarBg1.png']; //マップに使用する画像ファイル
	    map.loadData(mapData);
	    map.onenterframe=function(){
		    this.y+=2;
            if (this.y>=0){
                console.log("game clear");
                game.replaceScene(gameclearScene);
                game.pause(); //背景の最後まで来たのでゲーム終了

            }
	    };
	    map.y-=32*(mapData.length-30);
	    game.rootScene.addChild(map);


        //スタート画面
        gamestartScene=new Scene();
        var gss=new Sprite(236,48);
        gss.image=game.assets["images/start.png"];
        gss.y=400; gss.x=(game.width-gss.width)/2;
        gss.scaleX=1;gss.scaleY=1;
        gss.ontouchstart=function(){
          game.resume();
          game.removeScene(gamestartScene);
        };
        gamestartScene.addChild(gss);
        game.replaceScene(gamestartScene);
        game.pause();


        //自機のスプライトと操作ボタンを表示する

        //ここに自機の表示を書く
        player=new Player();
        game.rootScene.addChild(player);

        //操作用ボタンを表示する
        var scope=new Sprite(57,57);
        scope.image=game.assets['images/scope.png'];
        scope.x=0;
        scope.y=800;
        scope.buttonMode="a";
        game.rootScene.addChild(scope);
        var b_r=new Sprite(57,57);
        b_r.image=game.assets['images/scope.png'];
        b_r.x=580;
        b_r.y=800;
        b_r.buttonMode="right";
        game.rootScene.addChild(b_r);
        var b_l=new Sprite(57,57);
        b_l.image=game.assets['images/scope.png'];
        b_l.x=270;
        b_l.y=800;
        b_l.buttonMode="left";
        game.rootScene.addChild(b_l);
        var b_u=new Sprite(57,57);
        b_u.image=game.assets['images/scope.png'];
        b_u.x=425;
        b_u.y=720;
        b_u.buttonMode="up";
        game.rootScene.addChild(b_u);
        var b_d=new Sprite(57,57);
        b_d.image=game.assets['images/scope.png'];
        b_d.x=425;
        b_d.y=880;
        b_d.buttonMode="down";
        game.rootScene.addChild(b_d);


        //毎フレームごとの処理
        var lastStageIndex=0;
        game.onenterframe=function(){
            var current=stageData[lastStageIndex];
            if (current && current[0]==game.frame){
                var enemy_x=current[2];
                var enemy_y=current[3];
                if (enemy_x==999){
                    enemy_x=Math.floor(Math.random()*game.width);
                }
                if (enemy_y==999){
                        enemy_y=Math.floor(Math.random()*game.height);
                }
                var newenemy;
                switch(current[1]){
                    case 1:
                        newenemy=new Enemy1(enemy_x, enemy_y);
                        break;
                    case 2:
                        newenemy=new Enemy2(enemy_x, enemy_y);
                        break;
                    case 3:
                        newenemy=new Enemy3(enemy_x, enemy_y);
                        break;
                    case 4:
                        newenemy=new Enemy4(enemy_x, enemy_y);
                        break;
                    case 5:
                        newenemy=new Enemy5(enemy_x, enemy_y);
                        break;
                    case 6:
                        newenemy=new Enemy6(enemy_x, enemy_y);
                        break;
                    default:
                         newenemy=new Enemy1(enemy_x, enemy_y);
                         break;
                }
                game.rootScene.addChild(newenemy);
                lastStageIndex++;
            }
        };
    }
