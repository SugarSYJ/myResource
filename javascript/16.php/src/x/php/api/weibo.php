<?php

	// 获取前端数据
	// isset()
	$id = isset($_GET['id']) ? $_GET['id'] :"";

	// 文件地址
	$path = 'data/weibo.json';

	// 打开文件:fopen(path,model)
	// 打开文件干什么
	$file = fopen($path,'r');

	// 读取文件内容
	// 要读取多少:filesize(path)
	$content = fread($file,filesize($path));

	// 把json字符串转换成数组
	$data = json_decode($content,true);
	
	echo "$id";
	$res;

	// // 找到对应id的数据
	// for($i=0;$i<count($data);$i++){
	// 	if($data[$i]['id'] == $id){
	// 		$data[$i]['likecnt']++;
	// 		$res = $data[$i];
	// 		break;
	// 	}
	// }

	// // 关闭文件
	// fclose($file);

	// // 写入文件
	// // fwrite($file)
	// $file = fopen($path,'w');
	// fwrite($file,json_encode($data,JSON_UNESCAPED_UNICODE));
	// // 关闭文件
	// fclose($file);


	// echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>