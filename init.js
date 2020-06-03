	/**
	 *  init.js
	 * 
	 * 	ゲーム全体の初期化、画像の読み込み、グローバル変数の宣言を行う
	 * 
	 * **/
	
	//ゲーム全体で使う変数はここで宣言する    
	console.log("DEBUG: init.js loaded.");
    var game;
	var MAP_LINES;
	if (mapData in this){
		MAP_LINES=mapData.length;
	}
    var MOVE_FRAMES=5;  //タッチした場所まで、自機が何フレームで移動終了するか      
    var moveTo=300;
    var enemys=new Array();
    var enemyCount=0;
    var player;             //自機
    var gameoverScene;
    var sounds;
	
	
	function init(){
		console.log("DEBUG: init() called.");
        game=new Core(640,960);
        game.score=0;
        game.fps=20;
        
        game.onload=main;
        loadAssets();
        game.start();
	}
	
	//アセット（データ）の読み込み処理
    //画像を追加したい場合はここに追加
    function loadAssets(){
        var g_ASSETS = [
            "images/effect0.png",
            "images/start.png",
            "images/clear.png",
            "images/tank.png",
            "images/enemyshot.png",
            "images/space1.png",
            "images/space2.png",
            "images/myshot.png",
            "images/scope.png",
            "images/mychara0.png",
            "images/avatarBg1.png",
            "images/chara1.png",
            "images/icon1.png",
            "images/chara6.png",
            "images/gameover.png"
        ];
        game.preload(g_ASSETS);
    }
	