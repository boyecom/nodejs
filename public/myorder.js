angular.module('webapp').controller("myorderCtrl",function($scope,$http){
	$scope.limit=0;
	$scope.loadflag=false;
	$scope.loadlist=[];
	$http.post('/getMyorder',{limit:$scope.limit}).then(function(res){
		$scope.datalist=res.data;
	});

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
	$scope.loading=function(){
		$scope.limit+=5;
		$http.post('/getMyorder',{limit:$scope.limit}).then(function(res){
			var retdata =res.data;
			if(retdata.length==0){
				document.getElementById('load').innerText="已经加载到底了 ^-^";
			}else{
				$scope.loadflag=true;
				for(var i=0;i<retdata.length;i++){
					$scope.loadlist.push(retdata[i]);
				}
			}
		});
	}
});