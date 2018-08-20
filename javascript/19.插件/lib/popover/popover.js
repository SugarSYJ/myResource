/*
	* 创建并描述对象
		* 属性
		* 方法（能做什么）
			* init()
			* show()
			* close()
			* setPosition()
			* drag()
	* 指挥对象
 */
function Popover(options){

	// 默认值
	var defaults = {
		// 宽高
		width:600,
		height:'auto',

		// 位置
		position:'center',

		// 标题与内容
		title:'弹窗标题',
		content:'',

		// 是否可拖拽
		dragable:true,

		// 遮罩层透明度
		overlay:0.3
	}

	// 扩展默认参数
	var opt = Object.assign({},defaults,options);

	this.init(opt);

	/*// 弹窗宽高
	this.width = opt.width;
	this.height = opt.height;

	// 弹窗位置
	this.position = opt.position;

	// 标题和内容
	this.title = opt.title;
	this.content = opt.content;

	// 是否可拖拽
	this.dragable = opt.dragable;

	// 遮罩层透明度
	this.overlay = opt.overlay;*/
}

// 重置
Popover.prototype = {
	//生成html结构
	//绑定事件
	init(opt){
		// 创建弹窗div
		this.ele = document.createElement('div');
		this.ele.className = 'popover';

		// 创建标题
		if(opt.title){
			var title = document.createElement('div');
			title.className = 'title';
			title.innerHTML = opt.title;

			this.ele.appendChild(title);
		}

		var content = document.createElement('div');
		content.className = 'content';
		content.innerHTML = opt.content;
		this.ele.appendChild(content);

		// 删除按钮
		var btnClose = document.createElement('span');
		btnClose.className = 'btn-close';
		btnClose.innerHTML = '&times;';
		this.ele.appendChild(btnClose);
		btnClose.onclick = ()=>{
			this.close();
		}

		// 定义样式
		this.ele.style.width = opt.width + 'px';
		this.ele.style.height = opt.height + 'px';

		// 遮罩层
		this.overlay = document.createElement('div');
		this.overlay.className = 'overlay';
		this.overlay.style.opacity = opt.overlay;

		document.body.appendChild(this.overlay);
		document.body.appendChild(this.ele);


		this.show();

		// 是否可拖拽
		if(opt.dragable){
			this.drag();
		}


		return this;
	},

	//显示弹窗
	show(){
		this.ele.style.display = 'block';
		this.overlay.style.display = 'block';

		// 定位
		this.setPosition();
		return this;
	},
	close(){
		this.ele.style.display = 'none';
		this.overlay.style.display = 'none';
		return this;
	},

	//定位
	setPosition(x,y){
		if(x===undefined && this.position === 'center'){
			// 如果元素没有添加到页面，获取不到宽高
			x = (window.innerWidth - this.ele.offsetWidth)/2;
			y = (window.innerHeight - this.ele.offsetHeight)/2;
		}else if(x === 'right'){
			// x = window.innerWidth - this.ele.offsetWidth
		}else if(x === 'left'){

		}

		this.ele.style.left = x + 'px';
		this.ele.style.top = y + 'px';

		return this;
	},
	drag(){
		

		var self = this;
		var pop = self.ele;
		this.ele.onmousedown = e=>{
			var ox = e.clientX - pop.offsetLeft;
			var oy = e.clientY - pop.offsetTop;

			// 只能在标题位置拖拽
			if(oy>pop.children[0].offsetHeight){
				return;
			}

			self.overHandler = function(evt){
				var x = evt.clientX - ox;
				var y = evt.clientY - oy;
				self.setPosition(x,y);

				evt.preventDefault();
			}

			document.addEventListener('mouseover',self.overHandler,false);

			// document.onmousemove = function(evt){
			// 	var x = evt.clientX - ox;
			// 	var y = evt.clientY - oy;
			// 	self.setPosition(x,y);

			// 	evt.preventDefault();
			// }
			e.preventDefault();
		}

		document.addEventListener('mouseup',function(evt){
			document.removeEventListener('mouseover',self.overHandler,false);
		});
		// document.onmouseup = function(){
		// 	document.onmousemove = null;
		// }
		return this;
	}
}

// 属性特性
Object.defineProperty(Popover.prototype,'constructor',{
	configurable:true,
	value:Popover
})


// 确认对话框
function Confirm(options){
	var defaults = {
		width:300,
		title:false,
		content:'你确定这个操作吗',
		overlay:false
	}

	// 扩展默认参数
	var opt = Object.assign({},defaults,options);

	Popover.call(this,opt);

	// this.init(opt);
}

// 继承Popover的方法
Confirm.prototype = Object.create(Popover.prototype);

// 添加/重置方法
Confirm.prototype.init = function(opt){
	this.ele = document.createElement('div');
	this.ele.className = 'pop-confirm';
	this.ele.style.width = opt.width + 'px';


	// 内容
	var content = document.createElement('div');
	content.className = 'content';
	content.innerHTML = opt.content;
	this.ele.appendChild(content);

	var btnConfirm = document.createElement('button');
	btnConfirm.className = 'btn-confirm';
	btnConfirm.innerHTML = '确定';
	var btnCancel = document.createElement('button');
	btnCancel.className = 'btn-cancel';
	btnCancel.innerHTML = '取消';

	// 关闭
	btnCancel.onclick = ()=>{
		this.close();
	}

	this.ele.appendChild(btnConfirm);
	this.ele.appendChild(btnCancel);

	this.overlay = this.ele;

	document.body.appendChild(this.ele);

	this.show();
}


// 广告弹窗
// 显现右下角
// 关闭动画
function AdPop(){

}