<?php

    $arr = array(10,20.4,'30',40);
    // echo $ar;
    print_r($arr);
    // var_dump($arr);
    // 增删查改
    $arr[0] = 100;

    var_dump($arr);

    echo $arr[array_rand($arr)];

    // 数组遍历
    $arr2 = array();
    for($i=0;$i<10;$i++){
        $arr2[] = 10*$i;
    }
    var_dump($arr2);

    // 关联数组
    $goods = array(
        "name"=>"iphoneX",
        "price"=>8888,
        "color"=>"黑色"
    );
    var_dump($goods);
?>