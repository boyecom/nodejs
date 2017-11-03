angular.module('webapp').controller("detailCtrl",function($scope,$http,$location){
	$scope.count=1;
	$scope.id=$location.absUrl().split("/")[4];
	$scope.username='';
	$scope.password='';
	$scope.reduce=function(){
		if($scope.count<=1){
			$scope.count=1;
		}else{
			$scope.count--;
		}
	};
	$scope.add=function(){
		if($scope.count>=10){
			$scope.count=10;
		}else{
			$scope.count++;
		}
	};
	$scope.addmycart=function(){
		
		$http.get("/addMycart?id="+$scope.id+"&count="+$scope.count).then(function(res){
			if(res.data=="nologin"){

				$('#loginModal').modal('show');
			}else if(res.data=='ok'){
				$("#message").attr('data-content',"加入购物车成功")
				$("#message").popover('show');
				setTimeout(function(){$("#message").popover('hide')},2000);
			}else{
				$("#message").attr('data-content',"加入购物车失败")
				$("#message").popover('show');
				setTimeout(function(){$("#message").popover('hide')},2000);
			}
		})
		
	}
	$scope.addcollection=function(){
		$http.get('/addcollection?id='+$scope.id).then(function(res){

			if(res.data=="nologin"){
				$('#loginModal').modal('show');
			}else if(res.data=='ok'){
				$("#message").attr('data-content',"添加到收藏夹成功")
				$("#message").popover('show');
				setTimeout(function(){$("#message").popover('hide')},2000);
			}else if(res.data=="exist"){
				$("#message").attr('data-content',"亲，此宝贝已在您的收藏夹");
				$("#message").popover('show');
				setTimeout(function(){$("#message").popover('hide')},2000);
			}else{
				$("#message").attr('data-content',"添加到收藏夹失败");
				$("#message").popover('show');
				setTimeout(function(){$("#message").popover('hide')},2000);
			}
		});
		
	}
	$scope.login=function(){
		if($scope.password==""||$scope.username==""){
			return false;
		}
		$http.post('/login',{username:$scope.username,password:$scope.password})
		.then(function(res){
			if(res.data=="ok"){
				$("#loginmsg").html('');
				window.location.reload();
			}else{
				$("#loginmsg").html('<div class="alert alert-danger">用户名或密码错误</div>');
			}
		})
	}

	$('#loginModal').modal({
		backdrop:false,
		keyboard: true,
		show:false
	});
	$("#message").popover();
	
});
$(function(){
	
	$(".child-img img").mouseover(function(){
		var src=$(this).attr('src');
		$("img.main").attr('src',src);
	})
	 
	 $(".btn-group label").on('click',function(){
	 	var index = $(this).index();
	 	if(!$(this).hasClass('active')){
	 		$(this).addClass('active')
	 	}
	 	if(!$(this).hasClass('select')){
	 		$(this).addClass('select')
	 	}
	 	$(this).siblings('label').each(function(){
	 		if($(this).hasClass('active')){
	 			$(this).removeClass('active');
	 		}
	 		if($(this).hasClass('select')){
	 			$(this).removeClass('select');
	 		}
	 	})
	 })

})