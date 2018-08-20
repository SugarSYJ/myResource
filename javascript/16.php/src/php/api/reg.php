<?php

	// 后端接受前端数据
	// $_GET,$_POST
	$username = $_GET['username'];

	

	// 创建一个数组用于保存已经存在的用户
	$userlist = array('张三','李四','王巴马','奥尼玛','lemon','laoxie');


	if(in_array($username, $userlist)){
		// 如果存在，说明用于已经被暂用
		echo "no";
	}else{
		echo "yes";
	}


?>