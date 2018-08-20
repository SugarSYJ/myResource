<?php
    // 获取前端数据
    // isset()
    $id = isset($_GET['id']) ? $_GET['id'] : Null;
    // 文件地址
    $path = 'data/weibo.json';
    // 打开文件
    $file = fopen($path,'r');
    // 读取文件内容
    $content = fread($file,filesize($path));
    // 把json字符串转换成数组
    $data = json_decode($content,true);
    $res;
    // 找到对应id数据
    for($i=0;$i<count($data);$i++){
        if($data[$i]['id'] == $id){
            $data[$i]['likecnt']++;
            $res = $data[$i];
            break;
        }
    }
    // 关闭文件
    fclose($file);
    // 写入文件
    $file = fopen($path,'w');
    fwrite($file,json_encode($data,JSON_UNESCAPED_UNICODE));
    // 关闭文件
    fclose($file);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>