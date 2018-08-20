// 得到某个范围的随机数
// @param  {Number} min [最小值]
// @param  {Number} max [最大值]
// @return {Number}     [返回值]
function randomNumber(min,max){
    return parseInt(Math.random()*(max-min+1))+min;
}
// [得到一个随机颜色]
function randomColor(){
    var r = randomNumber(0,255);
    var g = randomNumber(0,255);
    var b = randomNumber(0,255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
//randomColor();得到一个随机颜色'rgb(255,0,0)'

/**
 * 得到一个16进制的随机颜色
 * @return {String} [返回16进制的随机颜色]
 */
function getColor(){
    var str = '0123456789abcdef';
    var res = '#';
    for(var i=0;i<6;i++){
        // var idx = Math.random()*str.length;
        var idx = randomNumber(0,str.length-1);
        res += str.charAt(idx);
    }
    return res;
}
// 生成4位随机数字字母组合的验证码
function getCode(){
    var str = '0123456789abcdefghijklnmopqrstuvwsyz';
    var res = '';
    for(var i=0;i<4;i++){
        var idx = Math.random()*str.length;
         res += str.charAt(idx);
    }
    return res;
}

// 封装一个删除非元素节点的函数
// 兼容版本浏览（IE8-）
var element={
    /**
     * [得到元素的子代]
     * @param  {node} ele [节点]
     * @param  {String} idx [索引]
     * @return {node}     [对应的元素节点]
     */
    children:function(ele){
        var arr=ele.childNodes;
        var res=[];
        for(var i=0;i<arr.length;i++){
            var num=arr[i].nodeType;
            if(num===1){    
                res.push(arr[i]);
            }
        }
        return res;
    },
    /**
     * [得到相邻的下一个元素节点]
     * @param  {node}   ele [元素节点]
     * @return {node}     [相邻的下一个元素节点]
     */
    next:function(ele){
        var next=ele.nextSibling;
        if(next.nodeType===1){
            return next;
        }else if(next.nodeType===3){
            return next.nextSibling;
        }
    },
    /**
     * [得到相邻的上一个元素节点]
     * @param  {node} ele [元素节点]
     * @return {node}     [相邻的上一个元素节点]
     */
    prev:function(ele){
        var prev=ele.previousSibling;
        if(prev.nodeType===1){
            return prev;
        }else if(prev.nodeType===3){
            return prev.previousSibling;
        }
    },
    /**
     * [通过类名获取节点]
     * @param  {String} str [类名]
     * @return {Array}     [数组]
     */
    getByClassName:function(str){
        var arr=document.getElementsByTagName('*');
        var attr=[];
        for(var i=0;i<arr.length;i++){
            if(arr[i].className===str){
                attr.push(arr[i]);
            }
        }
        return attr;
    }
   
}
// element.get(nodes);//[element,element]
// element.children(document.body);
// element.next(baidu);//
// element.getByClassName()


/**
 * [获取css样式,兼容ie8-]
 * @param  {Element} ele [要获取样式的元素]
 * @param  {String} key [css属性]
 * @return {String}     [css属性值]
 */
function getCss(ele,key){
    //判断思路：判断用户使用的浏览器是否支持getComputedStyle
    if(window.getComputedStyle){
        return getComputedStyle(ele)[key]
    }else if(ele.currentStyle){
        return ele.currentStyle[key]
    }else{
        // 如果以上都不支持，直接返回内联样式
        return ele.style[key];
    }
}
// getCss(box,'font-size');//16px

/**
 * [事件绑定函数，支持冒泡/捕获]
 * @param  {Node} ele     [需绑定事件的节点]
 * @param  {String} type    [事件类型]
 * @param  {Function} handler [事件处理函数]
 * @param  {Boolean} capture [是否捕获]
 */
function bind(ele,type,handler,capture){
    // 判断是否支持addEventListener
    if(ele.addEventListener){
        ele.addEventListener(type,handler,capture);
    }else if(ele.attachEvent){
        ele.attachEvent('on'+type,handler);
    }else{
        ele['on'+type] = handler
    }
}

// <<<<<<< .mine
// bind(box,'click',function(){},true)


/*
    cookie操作
        * 增
        * 删
        * 查
        * 改
 */
var cookie = {
    /**
     * [读取cookie]
     * @param  {String} name [cookie名]
     * @return {String}      [返回name对应的cookie值]
     */
    get:function(name){
        var cookies = document.cookie;
        var res = '';
        if(cookies.length){
            cookies = cookies.split('; ');//[]

            // 循环优化方式
            for(var i=0,len=cookies.length;i<len;i++){
                // 拆分cookie名、cookie值
                var arr = cookies[i].split('=');
                if(arr[0] === name){
                    res = arr[1];
                }
            }
        }

        return res;
    },
    /**
     * [添加cookie]
     * @param {String} name    [cookie名]
     * @param {String} val     [cookie值]
     * @param {[Date]} expires [有效期]
     * @param {[String]} path    [路径]
     */
    set:function(name,val,expires,path){
        var str = name+'='+value;

        // 传入有效期时
        if(expire){
            str += ';expires=' + expires.toUTCString();
        }

        if(path){
            str += ';path=' + path;
        }

        document.cookie = str;
    },
    /**
     * [删除cookie]
     * @param  {String} name [cookie名]
     */
    remove:function(name){
        var now = new Date();
        now.setDate(now.getDate()-10);
        // document.cookie = name + '=null;expires=' + now.toUTCString();
        this.set(name,'null',now);
    }
}

// cookie.get('carlistabcdefg');//[{}]
// cookie.set('carlist',JSON.stingify(carlist),now);//[{}]
// cookie.remove('carlist');>>>>>>> .r37

function animation(ele,attr,target){
    // 把定时器作为DOM节点的属性
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        // 获取当前值
        var current = getComputedStyle(ele)[attr];
        // 提取单位
        var unit = current.match(/\d([a-z]*)$/);
        unit = unit ? unit[1] : '';
        // 提取数字
        current = parseFloat(current);
        // 计算缓冲速度
        var speed = (target - current)/10;
        // 判断是否透明度
        if(attr==='opacity'){
            speed = speed > 0 ? 0.05 : -0.05;
        }else{
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        }
        // 到达目的清楚定时器
        if(current===target){
            clearInterval(ele.timer);
            current = target - speed;
        }
        ele.style[attr] = current + speed + unit;
    },30);
}
// animation(ele,'top',320);

// 多个属性同时执行
function animate(ele,opt,callback){
    var timerQty = 0;
    for(var attr in opt){
        // 记录动画数量
        timerQty++;
        createTimer(attr);
    }
    function createTimer(attr){
        // 以属性名创建定时器名字
        var timerName = attr + 'timer';
        // 清楚之前的定时器，放置多过定时器作用于同一个元素
        clearInterval(ele[timerName])
        // 目标值
        var target = opt[attr];
        // 创建定时器
        ele[timerName] = setInterval(function(){
            var current = getComputedStyle(ele)[attr];
            // 提取单位
            var unit = current.match(/\d([a-z]*)$/);
            unit = unit ? unit[1] : '';
            // 提取数字
            current = parseFloat(current);
            // 计算缓冲速度
            var speed = (target - current)/10;
            // 判断是否透明度
            if(attr==='opacity'){
                speed = speed > 0 ? 0.05 : -0.05;
            }else{
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            }
            // 到达目的清楚定时器
            if(current===target){
                clearInterval(ele[timerName]);
                current = target - speed;
                timerQty--;
                // 执行回调函数
                // 最后一个动画完成后才执行回调函数
                if(typeof callback === 'function' && timerQty===0){
                    callback();
                }
            }
            ele.style[attr] = current + speed + unit;
        },30);
    }
}
// animate(ele,{width:100;top:100});
// animate(ele,{width:100;top:100},function(){
//      animate(ele,{opacity:0.4})
// });