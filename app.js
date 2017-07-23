var HttpApp = angular.module('HttpandSearch', []);

HttpApp.controller('titleCont',function($scope){
	$scope.title="Angular-Http Services"; 
});

HttpApp.controller('usercontroller',function($scope,$http){

	$scope.tableHead="Kullanıcılar";

	$http({
		method:'GET',
		url:"https://jsonplaceholder.typicode.com/users"
	}).then(function successGet(response){
			$scope.Users=response.data
		},function errorGet(response){
			$scope.validation = response.statusText;
	});

	$scope.getUserCount=function(){
		return $scope.Users.length;
	};

	$("#donnk").css('display','none');

	$scope.SearchResult=function(){
		$scope.userResult=$scope.Users.filter(function(item){
			return item.id==$scope.username;
		});

		$scope.username="";

		if(!$scope.userResult.length)
		{
			$("#donnk").fadeIn(500,function(){
				var close=function(){
					$("#donnk").fadeOut(500);
				};
				setTimeout(close,2500);
			});
		}
	};

});
