angular.module('webapp')
.controller("kindsCtrl",function($scope,$http){
	$scope.food=[];
	$scope.manshoes=[];
	$scope.wemanshoes=[];
	$scope.manclose=[];
	$scope.wemanclose=[];
	$scope.flag=[false,false,false,false,false];
	
	$scope.selectflag=function(index){
		for(var i=0;i<$scope.flag.length;i++){
			$scope.flag[i]=false;
		}
		$scope.flag[index]=true;
	}
	$scope.removeActive=function(){
		$(".list-nav").find(".item-nav").each(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
			}
		});
	}
	

	$scope.load=function(index){
		$scope.removeActive();
		$(".list-nav").find(".item-nav").eq(index).addClass('active');
		switch(index){
			case 0:
				if($scope.food.length==0){
					$http.post("/getkinds",{typename:"food"}).then(function(res){
						$scope.food= res.data;
					});
				}
				$scope.selectflag(0);
				break;
			case 3:
				if($scope.manshoes.length==0){
					$http.post("/getkinds",{typename:"manshoes"}).then(function(res){
						$scope.manshoes= res.data;
					});
				}
				$scope.selectflag(1);
			break;
			case 4:
				if($scope.wemanshoes.length==0){
					$http.post("/getkinds",{typename:"wemanshoes"}).then(function(res){
						$scope.wemanshoes= res.data;
					});
				}
				$scope.selectflag(2);
			break;
			case 1:
				if($scope.manclose.length==0){
					$http.post("/getkinds",{typename:"manclose"}).then(function(res){
						$scope.manclose= res.data;
					});
				}
				$scope.selectflag(3);
			break;
			case 2:
				if($scope.wemanclose.length==0){
					$http.post("/getkinds",{typename:"wemanclose"}).then(function(res){
						$scope.wemanclose= res.data;
					});
				}
				$scope.selectflag(4);
			break;
			default:
			break;
		}
		
	}
	$scope.load(0);/*初始化*/
	


});



$(function(){
	$('.list-nav  .item-nav').click(function(){
		var index=$(this).index();
		/*$(".list-nav").find(".item-nav").each(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
			}
		});
		$(".list-nav").find(".item-nav").eq(index).addClass('active');*/
	})
	

})