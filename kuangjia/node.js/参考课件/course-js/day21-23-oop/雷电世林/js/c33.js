//主角
function Airship(_width, _height, _img, _left, _top) {
	this.AirshipNode = document.createElement("div");
	this.width = _width;
	this.height = _height;
	this.img = _img;
	this.left = _left;
	this.top = _top;
	this.createAirship = function() {
		this.AirshipNode.style.width = this.width + "px";
		this.AirshipNode.style.height = this.height + "px";
		//		this.AirshipNode.style.backgroundImage = this.img;
		this.AirshipNode.style.background = "url(img/fj2.png) 100% 100%";
		this.AirshipNode.style.backgroundRepeat = "no-repeat";
		this.AirshipNode.style.position = "absolute";
		this.AirshipNode.style.left = this.left + "px";
		this.AirshipNode.style.top = this.top + "px";
		document.body.appendChild(this.AirshipNode);
	};
	this.runAirship = function(keycode, ww, wh) {
		var speedx = 20;
		var speedy = 15;
		if(keycode == 37) { //左

			if(this.AirshipNode.offsetLeft >= 0) {
				this.AirshipNode.style.left = this.AirshipNode.offsetLeft - speedx + "px"
			} else {
				this.AirshipNode.style.left = "0px";
			}
		}
		if(keycode == 38) { //上
			if(this.AirshipNode.offsetTop >= 0) {
				this.AirshipNode.style.top = this.AirshipNode.offsetTop - speedy + "px"
			} else {
				this.AirshipNode.style.top = "0px";
			}
		}
		if(keycode == 39) { //右
			if(this.AirshipNode.offsetLeft <= ww) {
				this.AirshipNode.style.left = this.AirshipNode.offsetLeft + speedx + "px"
			} else {
				this.AirshipNode.style.left = ww - this.width + "px";
			}
		}
		if(keycode == 40) { //下
			if(this.AirshipNode.offsetTop <= wh) {
				this.AirshipNode.style.top = this.AirshipNode.offsetTop + speedy + "px"
			} else {
				this.AirshipNode.style.top = wh - this.height + "px";
			}
		}
	};
	this.getAirshipX = function() {
		return this.AirshipNode.offsetLeft;
	}
	this.getAirshipY = function() {
		return this.AirshipNode.offsetTop;
	}
}
//子弹
function Bullet(_width, _height, _color, x, y) {
	this.bulletNode = document.createElement("div");
	this.width = _width;
	this.height = _height;
	this.color = _color;
	this.x = x;
	this.y = y;
	this.creatBullet = function(keycode) {
		if(keycode == 32) {
			this.bulletNode.style.width = this.width + "px";
			this.bulletNode.style.height = this.height + "px";
			this.bulletNode.style.background = this.color;
			this.bulletNode.style.position = "absolute";
			this.bulletNode.style.borderRadius = "50%";
			this.bulletNode.style.left = this.x + 42 + "px";
			this.bulletNode.style.top = this.y - 10 + "px";
			document.body.appendChild(this.bulletNode);
		}
	}
	this.runBullet = function(bomb) {
		var bNode = this.bulletNode;
		bNode.timer = setInterval(function() {
			bNode.style.top = bNode.offsetTop - 15 + "px";
			if(bNode.offsetTop < 0) {
				clearInterval(bNode.timer);
				document.body.removeChild(bNode);
				bNode = null;
				bomb.bulletArr.shift();
			}
		}, 30);
	}

}
//敌人
function Enemy(_width, _height) {
	this.enemyNode = document.createElement("div");
	this.width = _width;
	this.height = _height;
	this.img = "url(img/fd.png)"
	this.createEnemy = function() {
		this.enemyNode.style.width = this.width + "px";
		this.enemyNode.style.height = this.height + "px";
		this.enemyNode.style.background = this.img + " 100% 100%";
		this.enemyNode.style.backgroundRepeat = "no-repeat";
		this.enemyNode.style.position = "absolute";
		this.enemyNode.style.top = "0px";
		this.enemyNode.style.left = "50%";
		document.body.appendChild(this.enemyNode);
	};
	this.runEnemy = function(speedx, speedy, wh, ww, bomb) {
		var enemynode = this.enemyNode;
		enemynode.timer = setInterval(function() {
			enemynode.style.left = enemynode.offsetLeft + speedx + "px";
			enemynode.style.top = enemynode.offsetTop + speedy + "px";
			if(enemynode.offsetLeft < 0 || enemynode.offsetLeft > ww - 80) {
				speedx *= -1;
			}
			if(enemynode.offsetTop > wh) {
				clearInterval(enemynode.timer);
				enemynode.parentNode.removeChild(enemynode);
				enemynode = null;
				bomb.score--;
				bomb.integral.innerHTML = bomb.score;
				if(bomb.score<=-10){
					alert("你已经挂了");
					location.reload();
				}
				bomb.enemyArr.shift();
			}

		}, 30)
	}
}

//碰撞
function Bomb() {
	this.bulletArr = [];
	this.enemyArr = [];
	this.integral = document.getElementById("integral");
	this.score = 0;
	this.setBulletArr = function(_bulletArr) {
		this.bulletArr = _bulletArr;
	}
	this.setEnemyArr = function(_enemyArr) {
		this.enemyArr = _enemyArr;
	}
	this.clearArr = function() {
		this.bulletArr = [];
		this.enemyArr = [];
	}
	this.runInto = function() {
		var _bulletArr = this.bulletArr;
		var _enemyArr = this.enemyArr;

		for(var i = 0; i < _bulletArr.length; i++) {
			for(var j = 0; j < _enemyArr.length; j++) {
				console.log(_enemyArr[j].offsetLeft <= _bulletArr[i].offsetLeft);
				console.log(_bulletArr[i].offsetLeft <= _enemyArr[j].offsetLeft + 80);
				console.log(_enemyArr[j].offsetTop <= _bulletArr[i].offsetTop);
				console.log(_bulletArr[i].offsetTop <= _enemyArr[j].offsetTop + 60);
				if(_enemyArr[j].offsetLeft <= _bulletArr[i].offsetLeft && _bulletArr[i].offsetLeft <= _enemyArr[j].offsetLeft + 80) {
					if(_enemyArr[j].offsetTop <= _bulletArr[i].offsetTop && _bulletArr[i].offsetTop <= _enemyArr[j].offsetTop + 60) {
						this.score++;
						this.integral.innerHTML = this.score;
						console.log("碰到了");
						var blastx = _bulletArr[i].offsetLeft;
						var blasty = _bulletArr[i].offsetTop;
						document.body.removeChild(_enemyArr[j]);
						document.body.removeChild(_bulletArr[i]);
						this.enemyArr.shift();
						this.bulletArr.shift();
						//爆炸效果			
						for(var i = 0; i < 20; i++) {
							var blastspeedx = -25 + Math.round(Math.random() * 50); //Math.round(Math.random())? -25 + Math.round(Math.random()*10):15 + Math.round(Math.random()*10);
							var blastspeedy = -25 + Math.round(Math.random() * 50);
							var blastcolor = getRandomColor();
							var blastr = 2 + Math.round(Math.random() * 5);
							var blast = creatBomb(blastx, blasty, blastr, blastcolor, blastspeedx, blastspeedy);
							
							blast.cBomb();
							blast.runBomb();
						}
						//爆炸结束
					}
				}
			}
		}
	}
}

window.onload = function() {
	var ww = window.innerWidth;
	var wh = window.innerHeight;
	var bomb = new Bomb(); //初始化碰撞事件
	var _bulletArr = new Array();
	var _enemyArr = new Array();
	document.documentElement.style.overflow = "hidden";
	//初始化飞机	
	var airship = new Airship(93, 100, "url(img/fj1.png)", 500, 500);
	airship.createAirship();
	//键盘事件
	document.onkeydown = function(evt) {
		var onEvent = evt || evetn;
		airship.runAirship(onEvent.keyCode, ww, wh); //飞机移动
		var airshipX = airship.getAirshipX();
		var airshipY = airship.getAirshipY();
		//初始化子弹
		var bullet = new Bullet(10, 20, "red", airshipX, airshipY);
		bullet.creatBullet(onEvent.keyCode);
		//让子弹飞会
		bullet.runBullet(bomb);
		//子弹组
		if(onEvent.keyCode == 32) {
			_bulletArr.push(bullet.bulletNode);
			bomb.setBulletArr(_bulletArr);
		}
	}

	var enemyTime = 1000;
	var timer = setInterval(function() {
		var enemy = new Enemy(80, 60);
		enemy.createEnemy(); //初始化敌人
		var speedx = -5 + Math.random() * 10;
		var speedy = 3;
		enemy.runEnemy(speedx, speedy, wh, ww, bomb); //敌人移动
		//敌人组
		_enemyArr.push(enemy.enemyNode);
		bomb.setEnemyArr(_enemyArr);

	}, enemyTime);

	//	var clearTimer = setInterval(function() {
	//		bomb.clearArr();
	//		_bulletArr = [];
	//		_enemyArr = [];
	//		console.log("世林把它清空啦");
	//	}, 20000);

	var bombTimer = setInterval(function() {
		bomb.runInto();
		console.log(bomb.enemyArr + " " + bomb.bulletArr);
	}, 10);
}
//爆炸（偷懒）
function creatBomb(_x, _y, _r, _color, _speedx, _speedy) {
	var obj = {
		x: _x,
		y: _y,
		bomb: document.createElement("div"),
		speedx: _speedx,
		speedy: _speedy,
		r: _r,
		color: _color,
		cBomb: function() {
			obj.bomb.style.width = obj.r + "px";
			obj.bomb.style.height = obj.r + "px";
			obj.bomb.style.borderRadius = "50%";
			obj.bomb.style.position = "absolute";
			obj.bomb.style.background = obj.color;
			obj.bomb.style.top = obj.y + "px";
			obj.bomb.style.left = obj.x + "px";
			document.body.appendChild(obj.bomb);
			console.log(obj.bomb);

		},
		runBomb: function() {
			var wh = window.innerHeight;
			var ww = window.innerWidth;

			var timer = setInterval(function() {
				var fh = obj.bomb.offsetTop;
				var fw = obj.bomb.offsetLeft;
				console.log(fh + " " + fw);
				obj.bomb.style.top = fh + obj.speedx + "px";
				obj.bomb.style.left = fw + obj.speedy + "px";
				if(fh <= obj.y - 100 || fh >= obj.y + 100) {

					obj.bomb.parentNode.removeChild(obj.bomb);
					obj.bomb = null;
					clearInterval(timer);

				}
				if(fw <= obj.x - 100 || fw >= obj.x + 100) {
					obj.bomb.parentNode.removeChild(obj.bomb);
					obj.bomb = null;
					clearInterval(timer);

				}
			}, 30);

		}
	}
	return obj;
}
//随机色
var getRandomColor = function() {

	return '#' +
		(function(color) {
			return(color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
				(color.length == 6) ? color : arguments.callee(color);
		})('');
}