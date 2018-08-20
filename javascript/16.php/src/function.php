<?php
    $num = 10;
    function show(){
        $num1 = 20;
        // echo "$num1";
        // echo $GLOBALS['num'] + $num1;
        global $num;
        echo $num+$num1;
    }
    show();


?>