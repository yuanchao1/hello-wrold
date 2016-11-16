angular.module("cityList",[])
	.config(function($stateProvider){
		$stateProvider.state('cityList',{
			url:'/cityList',
			templateUrl:'./modules/cityList/cityList.html',
			controller:'IndexCity',
			css:"./modules/cityList/cityList.css"
		})
	})
	.controller("IndexCity",['$scope','$http',function($scope,$http){
		$http.get('./JSON/getcitycody.json').success(function(mod){
			$scope.arr=mod.result.citylist;
		})
	}]) 