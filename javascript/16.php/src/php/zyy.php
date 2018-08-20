<?php
    $x='global x';
    function myTest(){
        //echo $x;//报错

        //正确写法
        echo $GLOBALS['x'];

       
    } 
    myTest();
    
?>