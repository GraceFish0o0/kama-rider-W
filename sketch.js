var cyclna
var Lun
var Ht
var joker
var ter
var mtal
var op
function preload(){
  cyclna = loadSound("Cyclna.mp3") //先把音樂檔載入到sound1程式碼中
  Lun = loadSound("Luna.mp3")
  Ht = loadSound("Heat.mp3")
  joker = loadSound("Joker.mp3")
  ter = loadSound("Totter.mp3")
  mtal = loadSound("Metal.mp3")
  op = loadSound("W-B-X ～W-Boiled Extreme～.mp3")
}



var right = "04cf23-e9e913-d70000".split("-").map(a=>"#"+a)
var left = "0d001f-1034fe-d6d6d6".split("-").map(a=>"#"+a)
var rightL = "d6da06-ffff00-ffca3c".split("-").map(a=>"#"+a)
var leftL = "6f00ff-00ffff-f2f2f2".split("-").map(a=>"#"+a)

var pos_x=[]
var pos_y=[]
var vy=[] //針對y的速度
var vx=[]
var size=[]
var face_move_var=false

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#8d99ae");

  analyzer = new p5.Amplitude();
  analyzer.setInput(cyclna)
  analyzer.setInput(Lun)
  analyzer.setInput(Ht)
  analyzer.setInput(joker)
  analyzer.setInput(ter)
  analyzer.setInput(mtal)
  analyzer.setInput(op)

  translate(width/2,height/2) 
  drawfaceR("#04cf23","#d6da06")
  drawfaceL("#0d001f","#6f00ff")
 //按鈕
  btnjo=createButton("Joker") //文字
  btnjo.position(120,10) //位置
  btnjo.size(90,40) //框框大小
  btnjo.style("font-size","20px") //文字大小
  btnjo.style("color","#6f00ff") //文字顏色
  btnjo.mousePressed(Joker)
  btnjo.style("background","#0d001f") 
//-----------------------------------------------
  btnTer=createButton("Trigger") //文字
  btnTer.position(120,60) //位置
  btnTer.size(90,40) //框框大小
  btnTer.style("font-size","20px") //文字大小
  btnTer.style("color","#6f00ff") //文字顏色
  btnTer.mousePressed(Trigger)
  btnTer.style("background","#0d001f")
//-----------------------------------------------
  btnMtl=createButton("Metal") //文字
  btnMtl.position(120,110) //位置
  btnMtl.size(90,40) //框框大小
  btnMtl.style("font-size","20px") //文字大小
  btnMtl.style("color","#6f00ff") //文字顏色
  btnMtl.mousePressed(Metal)
  btnMtl.style("background","#0d001f")
//----------------------------------------------  
  btnCyc=createButton("Cyclone") //文字
  btnCyc.position(20,10) //位置
  btnCyc.size(90,40) //框框大小
  btnCyc.style("font-size","20px") //文字大小
  btnCyc.style("color","#d6da06") //文字顏色
  btnCyc.mousePressed(Cyclone)
  btnCyc.style("background","#15a12a")
//----------------------------------------------  
  btnLuna=createButton("Luna") //文字
  btnLuna.position(20,60) //位置
  btnLuna.size(90,40) //框框大小
  btnLuna.style("font-size","20px") //文字大小
  btnLuna.style("color","#d6da06") //文字顏色
  btnLuna.mousePressed(Luna)
  btnLuna.style("background","#15a12a")  
//----------------------------------------------  
  btnHeat=createButton("Heat") //文字
  btnHeat.position(20,110) //位置
  btnHeat.size(90,40) //框框大小
  btnHeat.style("font-size","20px") //文字大小
  btnHeat.style("color","#d6da06") //文字顏色
  btnHeat.mousePressed(Heat)
  btnHeat.style("background","#15a12a")
//-----------------------------------------------
  // radioElement=createRadio()
  // radioElement.option("移動")  
  // radioElement.option("暫停")
  // radioElement.option("旋轉")
  // radioElement.position(230,10) //選鈕位置
  // radioElement.size(70,90)
  // radioElement.style("font-size","20px") 
  // radioElement.style("color","#ffca3c") 
  // radioElement.style("background","#d70000")
//----------------------------------------------
  btnMove=createButton("播放") //文字
  btnMove.position(230,10) //位置
  btnMove.size(90,40) //框框大小
  btnMove.style("font-size","20px") //文字大小
  btnMove.style("color","#d6da06") //文字顏色
  btnMove.mousePressed(opmove)
  btnMove.style("background","#1034fe") 
  
  btnStop=createButton("停止")
  btnStop.position(230,60) //位置
  btnStop.size(90,40) //框框大小
  btnStop.style("font-size","20px") //文字大小
  btnStop.style("color","#d6da06") //文字顏色
  btnStop.mousePressed(opstop)
  btnStop.style("background","#1034fe")
  noLoop()
  // for(var i=0;i<20;i++){
  //   push()
  //   translate(random(width),random(height))
  //   drawface(right[int(random(right.length))],left[int(random(left.length))] ,rightL[int(random(rightL.length))],leftL[int(random(leftL.length))])
  //   pop()
  //   }
}



function opmove(){
  loop()
  op.play()
}

function draw() {
  background("#8d99ae");
  // mode=radioElement.value()
  // for(var i=0;i<pos_x.length;i++){
  // push()
  //   translate(pos_x[i],pos_y[i])
  //   if(mousePressed){
  //     pos_y[i]=pos_y[i]+vy[i]
  //     pos_x[i]=pos_x[i]+vx[i]
  //   }
    // drawfaceR("#04cf23","#d6da06",size[i])
    // drawfaceL("#0d001f","#6f00ff",size[i])
    translate(width/2,height/2)  
    if(op.isPlaying()){ //有播放時

      var fc=map(analyzer.getLevel(),0,1,0.001,3)
    }else{
      var fc=1

    }
    
    drawfaceR("#04cf23","#d6da06",fc)
    drawfaceL("#0d001f","#6f00ff",fc)
  // // pop()
  // if(pos_y[i]>height){
  //   vy[i]=-vy[i]
  //   pos_y[i]=height
  // }
  // if(pos_y[i]<0){
  //   vy[i]=-vy[i]
  //   pos_y[i]=0
  // }
  // if(pos_x[i]>width){
  //   vx[i]=-vx[i]
  //   pos_x[i]=width
  // }
  // if(pos_x[i]<0){
  //   vx[i]=-vx[i]
  //   pos_x[i]=0
  // }
  // }

  // drawface(right[int(random(right.length))],left[int(random(left.length))] ,rightL[int(random(rightL.length))],leftL[int(random(leftL.length))])
  // fill(255)
  // textSize(50)
  // text("x:"+mouseX+",y:"+mouseY,50,50)

}




//疾風王牌 04cf23 0d001f；月光手槍 e9e913 1034fe；炙熱鋼鐵 d70000 d6d6d6
//(線)疾風王牌 d6da06 6f00ff；月光手槍 ffff00 00ffff；炙熱鋼鐵 ffca3c f2f2f2

function drawfaceR(clr,clrr,n=1) {
  push()
  scale(n)
  // translate(width/2,height/2)
  fill(clr) 
  arc(0,0,400,450,0.5*PI,1.5*PI)
  // fill(clr2) 
  // arc(0,0,400,450,1.5*PI,0.5*PI)
//------------------
 strokeWeight(3)
 stroke(clrr)
 line(-171,32,-195,40)
 line(-166,-41,-191,-60)
 line(-31,-62,-119,-178)

 line(-30,90,-60,120)
 line(-60,120,-120,90)
 line(-120,90,-173,109)
//---------------------- 
 line(-30,150,-60,180)
 line(-60,180,-110,160)
 line(-110,160,-128,170)
//**************************
//  stroke(clrl)
//  line(170,32,196,40)
//  line(165,-40,193,-60)
//  line(30,-60,120,-180)

//  line(30,90,60,120)
//  line(60,120,120,90)
//  line(120,90,173,109)
// //---------------------- 
//  line(30,150,60,180)
//  line(60,180,110,160)
//  line(110,160,128,170)
//分割線
 stroke(0)
 strokeWeight(1)
 rectMode(CENTER)
 fill(255)
 rect(0,0,60,450)
 rect(0,0,40,450)
 fill(0)
 rect(0,0,20,450)
//眼
  fill("#ff0000")
  ellipse(-105,0,143)
  ellipse(105,0,143)
//觸角  
  quad(0,0,-25,-30,0,-60,25,-30)
  fill(200)
  beginShape()
  vertex(0,-60)
  vertex(-30,-10)
  vertex(-300,-200)
  vertex(-30,-60)
  vertex(0,-100)
  vertex(30,-60)
  vertex(300,-200)
  vertex(30,-10)
  vertex(0,-60)
  endShape()

  pop()
}

function drawfaceL(clr2,clrl,g=1) {
  push()
  scale(g)
  // translate(width/2,height/2)
  // fill(clr) 
  // arc(0,0,400,450,0.5*PI,1.5*PI)
  fill(clr2) 
  arc(0,0,400,450,1.5*PI,0.5*PI)
//------------------
 strokeWeight(3)
//  stroke(clrr)
//  line(-171,32,-195,40)
//  line(-166,-41,-191,-60)
//  line(-31,-62,-119,-178)

//  line(-30,90,-60,120)
//  line(-60,120,-120,90)
//  line(-120,90,-173,109)
// //---------------------- 
//  line(-30,150,-60,180)
//  line(-60,180,-110,160)
//  line(-110,160,-128,170)
//**************************
 stroke(clrl)
 line(170,32,196,40)
 line(165,-40,193,-60)
 line(30,-60,120,-180)

 line(30,90,60,120)
 line(60,120,120,90)
 line(120,90,173,109)
//---------------------- 
 line(30,150,60,180)
 line(60,180,110,160)
 line(110,160,128,170)
//分割線
 stroke(0)
 strokeWeight(1)
 rectMode(CENTER)
 fill(255)
 rect(0,0,60,450)
 rect(0,0,40,450)
 fill(0)
 rect(0,0,20,450)
//眼
  fill("#ff0000")
  ellipse(-105,0,143)
  ellipse(105,0,143)
//觸角  
  quad(0,0,-25,-30,0,-60,25,-30)
  fill(200)
  beginShape()
  vertex(0,-60)
  vertex(-30,-10)
  vertex(-300,-200)
  vertex(-30,-60)
  vertex(0,-100)
  vertex(30,-60)
  vertex(300,-200)
  vertex(30,-10)
  vertex(0,-60)
  endShape()

  pop()
}

function mousePressed(){
  if(mouseY>80){ //設定點擊位置y軸小於80不產生物品
  //在陣列新增一筆資料
    // size.push(random(2)) //在size陣列產生一筆資料，資料值為0~2之間
    // vx.push(random(-5,5)) 
    // vy.push(random(-5,5))
    // pos_x.push(mouseX) 
    // pos_y.push(mouseY)
  } 

}



function Joker(){
  joker.play()
  drawfaceL("#0d001f","#6f00ff")
}

function Trigger(){
  ter.play()
  drawfaceL("#1034fe","#00ffff")
}

function Metal(){
  mtal.play()
  drawfaceL("#d6d6d6","#f2f2f2")
}

function Cyclone(){
  cyclna.play();
  drawfaceR("#04cf23","#d6da06")
}

function Luna(){
  Lun.play()
  drawfaceR("#e9e913","#ffff00")
}

function Heat(){
  Ht.play()
  drawfaceR("#d70000","#ffca3c")
}

function opstop(){
  op.stop()
  noLoop()
}