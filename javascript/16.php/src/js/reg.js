require(['config'],function(){
	require(['jquery'],function($){
		$('.btnReg').on('click',function(){
			var _username = $('#username').val();
			var _password = $('#password').val();
			// 发起ajax请求、
			$.ajax({
				url:'../mysql/reg.php',
				data:{
					username:_username,
					password:_password
				},
				success:function(data){
					if(data === 'fail'){
						alert('用户名已存在,请另起用户名');
					}else{
						alert('注册成功');
					}
					console.log(data);
				}
			});
		});
	});
});