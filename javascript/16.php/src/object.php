<?php
    /*
        类
            * 人
                * 黑人
                * 白人
                * 黄人
            * Car
                * 奥迪
                * 奥拓
                * 五菱宏光
                * 奔驰
                * 宝马

        对象（对象的成员）
            * 属性
            * 方法

        访问控制
            * public（公有，默认）：公有的类成员可以在任何地方被访问。
            * private（私有）：私有的类成员只能在类本身中访问。
            * protected（受保护）：受保护的类成员只能在类本身、子类、父类中访问。
            * static（静态）：声明类属性或方法为静态，就可以不实例化类而直接访问
                * 访问方式：类名::方法
                * 用途：一般用于工具类的封装
     */
    
    // 创建一个类（抽象）
    class Person{
        // 此处添加公共属性
        // var $name = 'genji';
        // var $age = 30;
        var $type = '人类';
        function __construct( $name, $age ){
            $this->name = $name;
            $this->age = $age;
        }
        // 方法
        function setName($name){
            $this->name = $name;
        }
        // 公共方法（默认，任意地方可以使用）
        public function getName(){
            echo $this->getAge();
            return $this->name;
        }
        // 私有方法只能在类内部调用
        private function getAge(){
            return $this->age;
        }
    }
    // 创建一个人（具体）
    $genji = new Person('根基'，33);
    $genji->setName('小鸡')；
    $genji->getName();

    var_dump($genji);

    class Man extends Person{
        // parent 指向Person
        // self 指向 Man本身
        static function isMan(){
            return 'yes';
        }
    }

    $m = new Man('laoxie',18);
    var_dump($m->getName());
    echo $m::isMan();
?>