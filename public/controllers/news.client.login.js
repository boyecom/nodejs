angular.module('webapp')
.value({"key":{"a1":1,'b1':2,'c1':"ok"}})//可以修改
.constant('url','http://www.boye.com')//不可修改
.value('key','hello')
.factory("Data",function(){
	msg1="hello1221";
	return {
		msg:'hello',
		setMsg:function(){
			this.msg="fine";
			return "setMsg Ok1";
		}
	}
})
.service("User",function(){
	this.firstName="li";
	this.lastName="boye";
	this.getName=function(){
		return this.firstName+this.lastName;
	}
})
.controller('LoginControl',function($scope,key,url,Data,User){
	$scope.title="用户登录";
	$scope.key=key;
	$scope.url=url;
	$scope.Data=Data;
	$scope.User=User;
	$scope.sex=0
	console.log("hello")
	Data.setMsg();

});

angular.module('webapp').directive('hello',function(){
	return {
		restrict:'A',
		//replace:true,	//替换(不显示)hello标签
		//template:'<h1>hello,restrict</h1>'

		link:function(scope,element,attrs){
				element.bind('mouseenter',function(){
					//alert("属性");
				})	
		}
	}
})	
	


