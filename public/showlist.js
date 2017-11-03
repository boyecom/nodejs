angular.module('webapp').controller("showlistCtrl",function($scope,$http){
	$scope.flag=[false];
	$scope.datalist=[];
	var query={};
	var search =document.location.search.slice(1).split("&");
	var searchtype=search[0].split("=")[1];
	if(searchtype=="search"){
		var value=decodeURI(search[1].split("=")[1]);
		$("#input_search").val(value);
		query['searchtype']="search";
		query['value']=value;
	}else {
		var value=search[1].split("=")[1];
		query['searchtype']=searchtype;
		query['value']=value;
	}
	$http.post("/getshowlist",query).then(function(res){
			$scope.datalist= res.data;
			if(res.data.length>0){
				$scope.flag[0]=true;
			}else{
				$scope.flag[0]=false;
			}
	});

	$scope.addcollection=function(id){
		$http.get('/addcollection?id='+id).then(function(res){

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