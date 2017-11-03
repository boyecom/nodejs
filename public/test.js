var app=angular.module('webapp');
app.directive('model',function(){
	return {
		restrict:'E',	//表示Element
		replace:true,	//替换(不显示)hello标签
		template:'<ul class=" nav navbar-nav ">\
		  <li class="active"><a href="#">首页</a></li>\
		  <li><a href="#">购物车</a></li>\
		  <li><a href="#">商品分类</a></li>\
		  <li><a href="#">收藏夹</a></li>\
		  <li><a href="#">我的订单</a></li>\
		</ul>'
	}
});