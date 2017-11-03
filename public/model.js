var app=angular.module('webapp');
app.directive('model',function(){
	return {
		restrict:'E',	//表示Element
		replace:true,	//替换(不显示)hello标签
		template:'<div class="progress">\
    <div class="progress-bar" role="progressbar"  id="progress-bar"\
        aria-valuemin="0" aria-valuemax="100" style="width:0%;">\
    </div>\
</div>\
<nav  class="navbar navbar-default" role="navigation">\ 
    	<div class="container-fluid" >\
		    <div class="navbar-header">\
		    	<img src="images/logo1.png" style="height:50px;">\
		    </div>\
	    <div>\
        <ul class=" nav navbar-nav ">\
		  <li class="active"><a href="#">首页</a></li>\
		  <li><a href="#">购物车</a></li>\
		  <li><a href="#">商品分类</a></li>\
		  <li><a href="#">收藏夹</a></li>\
		  <li><a href="#">我的订单</a></li>\
		</ul>\
    	<ul class=" nav navbar-nav navbar-right">\   
            <li><a href="/register"><span class="glyphicon glyphicon-user"></span> 注册</a></li>\ 
            <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>\ 
        </ul>\   
	</nav>'
	}
})