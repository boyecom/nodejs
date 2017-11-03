var myorder={
	momey:0.0,
	idlist:[],
	text:'金额￥:'
}

angular.module('webapp').controller("mycartCtrl",function($scope,$http){
	$scope.limit=0;
	$scope.loadflag=false;
	$scope.retdata=[];
	$scope.loading=function(){
		$scope.limit=$scope.limit+5;
		$http.post('/loadMycart',{limit:$scope.limit}).then(function(res){
			var retdatas =res.data;
			if(retdatas.length==0){
				document.getElementById('load').innerText="已经加载到底了 ^-^";
			}else{
				$scope.loadflag=true;
				for(var i=0;i<retdatas.length;i++){
					$scope.retdata.push(retdatas[i]);
				}
			}
		});
	};
	$scope.receive=function(){
		$http.post("/getUserInfo").then(function(d){
				var retdata=d.data;
				$scope.firstname=retdata['firstname'];
				$scope.phone=retdata['phone'];
				$scope.address=retdata['addrList'][0];
				$scope.other="";
			});
	}
	$scope.submit=function(){
		if($scope.firstname==""||$scope.phone==""||$scope.address=="") {
			return false;
		}
		$http.post("/submitMycart",{
			name:$scope.firstname,
			phone:$scope.phone,
			momey:myorder.momey,
			idlist:myorder.idlist,
			address:$scope.address,
			other:$scope.other
		}).then(function(d){
			if(d.data=="ok"){
				window.location.href="/myorder";
			}
		});
	}
	
});



$(function(){
	$(".list-group-item input[type='checkbox']").on('click',function(){
		//var price=parseFloat($(this).parent('.list-group-item').children('.price').text())
		//var count=parseInt($(this).parent('.list-group-item').find('.count').text())
		
		if($(this).is(':checked')){
			//myorder.momey+=price;
			if(!$(this).parent('.list-group-item').hasClass('select')){
				$(this).parent('.list-group-item').addClass('select');
			}
			if($("#myorder button").hasClass('disabled')){
				$("#myorder button").removeClass('disabled')
			}
		}else{
			//myorder.momey-=price;
			
			if($(this).parent('.list-group-item').hasClass('select')){
				$(this).parent('.list-group-item').removeClass('select');
			}
		}
		//myorder.momey=myorder.momey*10/10;
		var checked=false;
		for(var i=0;i<$(".list-group").find("input[type='checkbox']").length;i++){
			if($(".list-group").find("input[type='checkbox']").eq(i).is(':checked')){
				checked=true;
				break;
			}
		}
		if(!checked){
			if(!$("#myorder button").hasClass('disabled')){
				$("#myorder button").addClass('disabled')
			}
		}
		
	});

	$(".list-group-item .glyphicon-minus").on('click',function(){
		var count=parseInt($(this).parents('.count').children('.number').text());
		if(count<=1){
			count=1;
		}else{
			count--;
		}
		$(this).parents('.count').children('.number').text(count);
	})
	$(".list-group-item .glyphicon-plus").on('click',function(){
		var count=parseInt($(this).parents('.count').children('.number').text());
		if(count>=10){
			count=10;
		}else{
			count++;
		}
		$(this).parents('.count').children('.number').text(count);
	});
	$(".list-group-item button.remove").click(function(){
		//$(this).parents('.list-group-item').remove();
		var id=$(this).parents('.list-group-item').children('a').first().attr('href').split("/")[2];
		var index=$(this).parents('.list-group-item').index();
		$.get('/removeMycart',{id:id},function(d){
			if(d=='ok'){
				$('.list-group').find('.list-group-item').eq(index).remove();
				//$(this).parents('.list-group-item').remove();
			}
		})
	});

	$('#myorderModal').modal({
		backdrop:false,
		keyboard: true,
		show:false
	});
	$("#myorder button").click(function(){
		if($(this).hasClass('disabled')) return false;
		myorder.momey=0.0;
		for(var i=0;i<$(".list-group").find("input[type='checkbox']").length;i++){
			if($(".list-group-item").find("input[type='checkbox']").eq(i).is(':checked')){
				var price=parseFloat($(".list-group").find('.list-group-item').eq(i).children('.price').text());
				var count=parseInt($(".list-group").find('.list-group-item').eq(i).find('.count').text());
				var id=$(".list-group").find(".list-group-item").eq(i).children('a').first().attr('href').split("/")[2];

				myorder.idlist.push(id);
				myorder.momey+=price*count
			}
		}
		myorder.momey=Math.floor(myorder.momey*100)/100;
		$("#momey").text(myorder.text+myorder.momey);
		$('#myorderModal').modal('show');
	});
	/*$("#load").click(function(){
		var limit=$("#load").attr('name');
		$.post('/loadMycart',{limit:limit},function(d){
			alert(d)
		})
	})*/




});