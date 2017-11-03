angular.module('webapp').
controller("mainCtrl",function($scope,$http){
	//$scope.myCarouselList=[{},];
	$scope.myCarousel=[
		{url:"/mycart",src:"images/08.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
		{url:"/mycart",src:"images/05.jpg"},
		{url:"/mycart",src:"images/04.jpg"},
	];
	$scope.youhui=[
		{url:"/mycart",src:"images/08.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
		{url:"/mycart",src:"images/08.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
	];
	$scope.tuijian=[
		{url:"/mycart",src:"images/08.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
		{url:"/mycart",src:"images/08.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
	];
	$scope.haochi=[
		{url:"/mycart",src:"images/08.jpg"},
		{url:"/mycart",src:"images/07.jpg"},
		{url:"/mycart",src:"images/06.jpg"},
		{url:"/mycart",src:"images/08.jpg"},
		
	];
	

});



$(function(){
	
	$('#myCarousel').carousel({
		interval:3000,
	});
});