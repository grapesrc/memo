var canvas = document.getElementById("main");//canvasを読み込む
var ctx = canvas.getContext("2d");
var px = 10    //player x座標
var py = 120    //player y座標

var p_dx = 0    //player xの速さ
var p_dy = 0    //player yの速さ


//playerを描く関数
function player_draw(){
    ctx.beginPath()
    ctx.rect(px,py,10,10)
    ctx.fillStyle = "#00ff00"
    ctx.fill()
    ctx.closePath()
}

//キーが押されたときに実行される
document.onkeydown = function(e){
    if(e.key == "ArrowUp"){  //↑
        p_dx = 0
        p_dy = -1
    }
    if(e.key == "ArrowDown"){//↓
        p_dx = 0
        p_dy = 1
    }
}
//キーが離されたときに実行される
document.onkeyup = function(e){
    p_dx = 0    //止める
    p_dy = 0
}

function draw(){
    ctx.clearRect(0/*開始地点*/,0,canvas.width/*終了地点*/,canvas.height)   //canvasをいったんクリアする
    player_draw()
    //playerを動かす
    px += p_dx
    py += p_dy
}
setInterval(draw,10)    //10ミリ秒単位で実行

draw();