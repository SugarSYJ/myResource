<?php
	// header('content-type:text/html;charset=gbk');
	$html = file_get_contents('http://1212.ip138.com/ic.asp');

	$html = iconv('gbk','utf-8',$html);
	
	preg_match('/\[(.+)\]/', $html,$res);

	echo $res[1];
?>