var canvas = document.getElementById("main")
var ctx = canvas.getContext("2d")

var block_x = 100  //blockのx座標
var block_y = 100 //blockのy座標
var block_s = 30    //blockのサイズ

var player_w = block_s - 2  //playerの横
var player_h = block_s - 2  //playerの縦
var player_x = 150  //playerのx
var player_y = 150  //player のy
var player_speed = 2
var player_dx = player_speed
var player_dy = 0

//player描画
function player_draw(){
    ctx.beginPath()
    ctx.rect(player_x,player_y,player_w,player_h)
    ctx.fillStyle="#00ff00"
    ctx.fill()
    ctx.closePath()
}

//block描画
function block_draw(){
        ctx.beginPath()
        ctx.rect(block_x,block_y,block_s,block_s)
        ctx.fillStyle="#0000ff"
        ctx.fill()
        ctx.closePath()
}

//blockとplayerの衝突感知sys
function b_collision(){
    if(block_y + block_s > player_y&& block_x + block_s >player_x &&block_y < player_y+player_h&& block_x <player_x+player_w){
        console.log("衝突しました!")
    }
}
//memo***************

//休憩(衝突の図解)
/*
    block_x[i]+block_s   O
    block_y[i]+block_s   O
            ↓            O
            Paaaaaaaaaaaaaaaaaaaaaa
            a            O
            a            O
            a            O
  OOOOOOOOOOaOOOOOOOOOOOOP ← block_x[i]
            a            ↑
            a            ↑
            a            ↑
            a            block_y[i]                   こんな感じ（´・ω・｀）つ
*/

//キー押されたときの処理
document.onkeydown = function(e){
    console.log(e.key)
    if(e.key == "ArrowRight" || e.key == "Right"){//→
        player_dx = player_speed
        player_dy = 0
    }
    if(e.key == "ArrowLeft" || e.key == "Left"){//←
        player_dx = -player_speed
        player_dy = 0
    }
    if(e.key == "ArrowUp" || e.key == "Up"){//↑
        player_dx = 0
        player_dy = -player_speed
    }
    if(e.key == "ArrowDown" || e.key == "Down"){//↓
        player_dx = 0
        player_dy = player_speed
    }
}
//描画処理
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    block_draw()
    player_draw()

    //はじに触れたら跳ね返る
    //上下
    if(player_y + player_dy < 0 || player_y + player_dy > canvas.height-player_h){
        player_dy = -player_dy
    }
    //左右
    if(player_x + player_dx < 0 || player_x + player_dx > canvas.width-player_w){
        player_dx = -player_dx
    }

    b_collision()
    player_x += player_dx
    player_y += player_dy
}
setInterval(draw,10)

//このページを読み込んだら
window.onload = function(){
    //canvasの大きさを画面サイズに合わせる
    canvas.width = document.documentElement.clientWidth-10;
    canvas.height = document.documentElement.clientHeight-25;
    draw()
}