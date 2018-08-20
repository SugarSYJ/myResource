function animate(ele,opt,callback){
	// 记录定时器的个数
	if(ele.timerLen === undefined) {
		ele.timerLen = 0;
	}

	for(var attr in opt){
		// 如果之前有正在执行的动画，则先清除
		if(ele[attr+'timer']){
			clearInterval(ele[attr+'timer']);
			ele[attr+'timer'] = undefined;
			ele.timerLen--;
		}
	}

	//遍历所有属性，并为每个属性设定时器
	for(var attr in opt){
		// 把当前attr写入当前对象的属性
		(function(attr){
			ele.timerLen++;
			ele[attr+'timer'] = setInterval(function(){
				var target = opt[attr];

				// 获取初始值
				var _attr = parseFloat(getComputedStyle(ele)[attr]);

				// 计算初始值与目标值差值，并根据这个值计算速度
				var speed = (target - _attr)/10;

				// 针对opacity属性的速度
				var oSpeed = speed > 0 ? 0.1 : -0.1;

				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if(attr == 'opacity'){
					_attr += oSpeed;
				}else{
					_attr += speed;
				}

				// 当值的改变超过目标值时，就停止修改
				if(_attr == target){
					clearInterval(ele[attr+'timer']);
					ele[attr+'timer'] = undefined;
					_attr = target;

					ele.timerLen--;

					// 回调函数执行
					if(ele.timerLen == 0){
						// 动画执行完毕
						/*if(typeof callback === 'function'){
							callback();
						}*/
						typeof callback === 'function' && callback();
					}
					return;
				}

				/*if(attr == 'opacity'){
					ele.style[attr] = _attr;
				}else{
					ele.style[attr] = _attr + 'px';
				}*/
				ele.style[attr] = _attr + (attr == 'opacity'? '' : 'px');
			},50);
		})(attr);
	}
}