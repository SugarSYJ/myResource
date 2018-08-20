<?php
    $list = array();
    $price = array(998,1998,2998,3998,4998,5998,6998,7998,8998,9998);
    $color = array('绿色','白色','蓝色','土豪金','黑色','灰色');
    // 循环写入
    for($i=0;$i<50;$i++){
        $goods = array(
            "name"=>"ihpone$i",
            "pirce"=>$price[array_rand($price)],
            "color"=>$color[array_rand($color)],
            "imgurl"=>"img/goods$i.jpg"
        );
        $list[] = $goods;
    }
    // var_dump($list);
    echo json_encode($list,JSON_UNESCAPED_UNICODE);
    // 遍历关联数组
    // $goods = array(
    //     "name"=>"ihpone$i",
    //     "pirce"=>$price[array_rand($price)],
    //     "color"=>$color[array_rand($color)],
    //     "imgurl"=>"img/goods$i.jpg"
    // );
    // foreach($goods as $key=>$val){
    //     echo "$key:$val<br>";
    // }
?>