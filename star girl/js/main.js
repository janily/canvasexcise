var can;
var ctx;

var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var stars = [];
var num = 30;

var lastTime;
var deltaTime;

var switchy = false;
var life = 0;

function init() {

	can = document.getElementById('canvas');
	ctx = can.getContext('2d');

	w = can.width;
	h = can.height;

	document.addEventListener("mousemove",mousemove,false);

	girlPic.src = "src/girl.jpg";
	starPic.src = "src/star.png";


	for(var i = 0; i < num; i++) {

		stars[i] = new starObj();
		stars[i].init();
	}

	console.log(w);

	lastTime = Date.now();

	gameloop();

}

function gameloop() {

	window.requestAnimFrame(gameloop);

	var now = Date.now();

	deltaTime = now - lastTime;

	lastTime = now;

	// console.log(deltaTime);

	drawBg();
	drawGirl();
	drawStars();
	aliveUpdate();
}

function drawBg() {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0,0,w,h);
}

function drawGirl() {
	//绘制图片 drawImage(img,x,y)
	//x 正方向向右，y轴正方向向下  0 0 在canvas左上角

	ctx.drawImage(girlPic,100,150,600,400);
}

function mousemove(e) {
	if(e.offsetX || e.layerX) {
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;

		//判断位置 px || py

		if(px > 100 && px < 700 && py > 150 && py < 450) {
			switchy = true;
		} else {
			switchy = false;
		}
	}
}

