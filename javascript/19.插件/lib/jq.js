

function Element(selector){

	this.init(selector);
}

Element.prototype = {
	init:function(selector){
		try{
			this.ele = document.querySelectorAll(selector);
		}catch(error){
			var sele = selector.slice(1);

			// 同通过id获取
			if(/^#/.test(selector)){
				this.ele = [document.getElementById(sele)];
			}

			// 通过类名获取
			else if(/^\./.test(selector)){
				try{
					this.ele = document.getElementsByClassName(sele);
				}catch(err){
					// 先获取所有
					this.ele = [];
					var ele = document.getElementsByTagName('*');
					for(var i=0,len=ele.length;i<len;i++){
						var currentClass = ele[i].className.split(' ');//'box' 'box content'
						if(currentClass.indexOf(sele)>=0){
							this.ele.push(ele[i]);
						}
					}
				}
			}

			// 通过标签获取
			else{
				this.ele = document.getElementsByTagName(selector);
			}
		}

		// 获取元素的个数
		this.len = this.ele.length;
		return this;
	},
	show:function(){
		for(var i=0;i<this.len;i++){
			this.ele[i].style.display = 'block';
		}

		return this;
	},
	hide:function(){
		for(var i=0;i<this.len;i++){
			this.ele[i].style.display = 'none';
		}
		return this;
	},
	on:function(type,handler,capture){
		for(var i=0;i<this.len;i++){
			if(this.ele[i].addEventListener){
				this.ele[i].addEventListener(type,handler,capture);
			}else if(this.ele[i].attachEvent){
				this.ele[i].attachEvent('on'+type,handler);
			}else{
				this.ele[i]['on'+type] = handler
			}
		}


		return this;
	},

	/**
	 * [动画函数]
	 * @param  {Object}   opt      [动画目标值]
	 * @param  {Function} callback [回调函数]
	 */
	animate:function(opt,callback){
		var self = this;
		for(var i=0;i<this.len;i++){
			(function(i){
				// 记录属性个数（动画数量）
				var timerQty = 0;
				for(var attr in opt){
					// 记录动画数量
					timerQty++;

					//createTimer(attr);
					(function(attr){
						// 以属性名创建定时器名字
						var timerName = attr + 'timer';

						// 清除之前的定时器,放置多个定时器作用于同一个元素
						clearInterval(self.ele[i][timerName]);

						// 目标值
						var target = opt[attr];

						// 创建定时器
						self.ele[i][timerName] = setInterval(function(){
							// 获取当前值
							var current = getComputedStyle(self.ele[i])[attr];

							// 提取单位
							var unit = current.match(/\d([a-z]*)$/);
							unit = unit ? unit[1] : '';

							// 提取数字
							current = parseFloat(current);

							// 计算缓冲速度
							var speed = (target - current)/10;

							//判断属性是否为opacity
							if(attr === 'opacity'){
								speed = speed>0 ? 0.05 : -0.05;
							}else{
								speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
							}

							// 到达目标值/清除定时器
							if(current === target){
								clearInterval(self.ele[i][timerName]);
								current = target - speed;

							// 数量减1
							timerQty--;

							// 执行回调函数
							// 最后一个动画执行完成后才执行回调函数
							if(typeof callback === 'function' && timerQty===0){
								callback();
							}
						}

						self.ele[i].style[attr] = current + speed + unit;

					},30);
				})(attr)
			}
			})(i)
			
		}

		
	},

	/**
	 * [css description]
	 * @param  {[type]} attr [description]
	 * @param  {[type]} val  [description]
	 */
	css:function(attr,val){
		// 用于保存获取样式
		var res;

		if(window.getComputedStyle){
			res = getComputedStyle(this.ele[0])[attr]
		}else if(this.ele[0].currentStyle){
			res = this.ele[0].currentStyle[attr]
		}else{
			// 如果以上都不支持，直接返回内联样式
			res = this.ele[0].style[attr];
		}

		// 获取：只获取第一个元素的值
		// 返回一个值（不能返回this）
		if(val === undefined){
			return res;
		}



		// 设置
		// 设置内联样式

		// 提取单位：'100px','50deg','0.5'
		var unit = res.match(/[a-z]+$/i);
		unit = unit?unit[0]:'';

		for(var i=0;i<this.len;i++){
			// 如果val中有单位，则不实用unit
			this.ele[i].style[attr] = val + (String(val).match(/[a-z]+$/i) ? '' : unit);
		}

		return this;
	}
}

Object.defineProperty(Element.prototype,'constructor',{
	configurable:true,
	value:Element
});


// new Element('#box');//
// new Element('.box');//多个
// new Element('a');//多个

// <div class="box content"></div>

var $ = function(selector){
	return new Element(selector);
}