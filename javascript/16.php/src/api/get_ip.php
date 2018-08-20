<?php
    /*
        url:http://2017.ip138.com/ic.asp
        file_get_contents($url)
     */
    $url = 'http://2017.ip138.com/ic.asp';
    $content = file_get_contents($url);
    // 修改编码
    $content = iconv('gb2312','utf-8',$content);
    preg_match('/\[(.+)\]/',$content,$res);
    // var_dump($res);
    echo $res[1];
?>