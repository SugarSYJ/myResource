require(['config'],function(){
    require(['jquery'],function($){
        $('.btnSign').on('click',function(){
            var _username = $('#username').val();
            var _password = $('#password').val();
            $.ajax({
                url:'../mysql/login.php',
                data:{
                    username:_username,
                    password:_password
                },
                success:function(data){
                    if(data === 'ok'){
                        alert('登录成功');
                        location.href = 'http://baidu.com';
                    }else{
                        alert('用户名密码不正确')
                    }
                    console.log(data);
                }
            });
        });
    });
});