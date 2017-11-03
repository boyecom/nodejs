angular.module('webapp',[]).
controller("headCtrl",function($scope,$location){
	var classval=$location.absUrl().split("/")[3];
	$scope.classAct={
		main:"",
		mycart:'',
		kinds:'',
		collection:'',
		myorder:''
	}
		$scope.classAct[classval]="active";
}).controller('validateCtrl',function($scope,$http){
	$scope.username="";
	$scope.password1="";
	$scope.password2="";
	$scope.phone="";
	$scope.email="";
	$scope.address="";
	var reg=new RegExp("1\\d{10}");

	$scope.usernameVal=function(){
		$http({
				method: 'GET',
				url: '/isUsername?username='+$scope.username
			}).then(function successCallback(res) {
					if(res.data=="exist"){
						document.getElementById('username-exist').innerText="用户名已存在";
					}else{
						document.getElementById('username-exist').innerText='';
					}	
				
			});
	};
	$scope.phoneVal=function(){
		
		if(reg.test($scope.phone)||$scope.phone==""){
			document.getElementById('phone-error').innerText="";
		}else{
			document.getElementById('phone-error').innerText="请输入正确的号码";
		}

	};
	$scope.passwordVal=function(){
		if($scope.password1!=$scope.password2){
			document.getElementById('passwd-diff').innerText="两次输入密码不一致!";
		}else{
			document.getElementById('passwd-diff').innerText="";
		}
	};
	$scope.userReg=function(){
		if($scope.username==""||$scope.password1!=$scope.password2 ||$scope.password1==""){
			return false;
		}
		if(!reg.test($scope.phone)&&$scope.phone!=""){
			return false;
		}
		$http.post('/register',
			{
				username:$scope.username,
				password:$scope.password1,
				email:$scope.email,
				phone:$scope.phone,
				address:$scope.address

			})
			.then(function(res){
				var Omsg=document.getElementById("reg-msg");
				if(res.data=="ok"){
						document.getElementById('reg-submit').style.cursor='not-allowed';
						Omsg.innerHTML='<div class="alert alert-success">\
						<a href="#" class="close" data-dismiss="alert">&times;</a>\
						<strong>成功！</strong>恭喜成为会员 &nbsp;<a href="/">登陆</a>\
						</div>';
				}else{
					Omsg.innerHTML='<div class="alert alert-warning">\
					<a href="#" class="close" data-dismiss="alert">&times;\
					</a><strong>失败！</strong>很遗憾，该用户注册失败</div>';
					
				}

		});
		

	}

})/*.controller('settingCtrl',function($scope){

});*/
$(function(){
	$('#regModal').modal({
		backdrop:false,
		keyboard: true,
		show:false
	});
	$("#register").click(function(){
		document.getElementById('reg-submit').style.cursor='pointer';
		document.getElementById("reg-msg").innerHTML="";
	 	$('#regModal').modal('show');
	});
	$(".head-search").click(function(){
		var value=$("#input_search").val();
		if(value==""){
			return false;
		}else{
			var url="/showlist?searchtype=search&value="+value;
			url=encodeURI(url);
			window.location.href=url;
		}
	})
	/*$('#setModal').modal({
		backdrop:false,
		keyboard: true,
		show:false
	});
	$("#setting").click(function(){
	 	$('#setModal').modal('show');
	});*/

})