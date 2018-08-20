<?php
	/*
		for：应用于值数组
		foreach()：应用于关联数组

		json字符串
			* json_encode()：把数组转成字符串
			* json_decode(json,assoc)：把字符串转成数组/对象
	 */
	$list = array();//[{name:xx,price:888},{}]

	$price = array(998,1998,2998,3998,4998,5998,6998,7998,8998,9998);
	$color = array('绿色','白色','蓝色','土豪金','黑色','灰色');

	// 循环写入
	for($i=0;$i<50;$i++){
		$goods = array(
			"name" => "iphone$i",
			"price" => $price[array_rand($price)],
			"color" => $color[array_rand($color)],
			"imgurl" => "img/goods$i.jpg"
		);

		$list[] = $goods;
	}

	// var_dump($list);
	echo json_encode($list,JSON_UNESCAPED_UNICODE);


	/*// 遍历关联数组
	$goods = array(
		"name" => "iphone$i",
		"price" => $price[array_rand($price)],
		"color" => $color[array_rand($color)],
		"imgurl" => "img/goods$i.jpg"
	);

	foreach($goods as $key=>$val){
		echo "$key:$val<br>";
	}*/

?>