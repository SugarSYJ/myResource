<?php

	// 获取前端数据
	// 名字
	$_name = isset($_GET['name']) ? $_GET['name'] : Null;
	//内容
	$_con = isset($_GET['con']) ? $_GET['con'] : Null;
	//时间
	$_time = isset($_GET['time']) ? $_GET['time'] : Null;	
	//点赞
	$zan = isset($_GET['zan']) ? $_GET['zan'] : Null;
	//评论
	$commentNum = isset($_GET['commentNum']) ? $_GET['commentNum'] : Null;

	// echo $zan;
	// 文件地址
	$path = 'data/weibo.json';

	// 打开文件:fopen(path,model)
	$file = fopen($path,'r');

	// 读取文件内容
	// 要读取多少:filesize(path)
	$content = fread($file,filesize($path));

	// 把json字符串转换成数组
	$data = json_decode($content,true);
	// var_dump($data);
	

	$r = '';
	$res = '';
	// 找到对应zan的数据
	for($i=0;$i<count($data);$i++){
		// var_dump($data[$i]);
		if($data[$i]['zan'] == $zan){
			$data[$i]['zan']++;
			$r = $data[$i]['zan'];
			break;
		}
	}
	for($j=0;$j<count($data);$j++){
		// var_dump($data[$j]);
		if($data[$j]['comment_num'] == $commentNum){
			$data[$j]['comment_num']++;
			$res = $data[$j]['comment_num'];
			break;
		}
	}
	// var_dump($data);


	//create a object 
	class Person{}

	$p = new Person($_name, $_con ,$_time );
    $p->name = $_name; 
 	$p->con = $_con; 
 	$p->time = $_time; 	

	if ($zan){
		echo $r;
	}else{
		// echo json_encode($p)
		// echo $res . ", " .json_encode($p);
		echo $res;
		array_push($data[0]['comment'],$p);
	}

	// 关闭文件
	fclose($file);

	// 写入文件
	$file = fopen($path,'w');
	fwrite($file,json_encode($data));

	//fwrite($file,json_encode($data,JSON_UNESCAPED_UNICODE));
	// 关闭文件
	fclose($file);


	
?>