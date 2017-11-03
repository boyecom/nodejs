angular.module('webapp').controller("collectionCtrl",function($scope,$http){
	$scope.limit=0;
	$scope.datalist=[]

	$scope.format=function(d){
		//return d.replace("T"," ").split(".")[0];
		var date= new Date(d);
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var d=date.getDate();
		var hh=date.getHours();
		var mm=date.getMinutes();
		var ss=date.getSeconds();
		if(hh<10) dd="0"+hh;
		if(mm<10) mm="0"+mm;
		if(ss<10) ss="0"+ss;
		var time=y+"年"+m+"月"+d+"日 "+hh+":"+mm+":"+ss
		return time;
	}
	$http.post('/loadcollection',{limit:$scope.limit}).then(function(res){
			var d=res.data;
			if(d.length==0){
				document.getElementById('load').innerText="没有更多了^-^";
			}else{
				for(var i=0;i<d.length;i++){
					$scope.datalist.push(d[i])
				}
			}

	});

	$scope.loading=function(){
		$scope.limit+=10;
		$http.post('/loadcollection',{limit:$scope.limit}).then(function(res){
			var d=res.data;
			if(d.length==0){
				document.getElementById('load').innerText="没有更多了^-^";
			}else{
				for(var i=0;i<d.length;i++){
					$scope.datalist.push(d[i])
				}
			}

		});
	}

	$scope.remove=function(id,index){
		
		$http.get("/removecollection?id="+id).then(function(res){
			if(res.data=="ok"){
				$(".collection .list-group").find(".list-group-item").eq(index).remove();
			}else{

			}
		});
	}

	
});