var HttpApp = angular.module('HttpandSearch', []);

HttpApp.controller('titleCont',function($scope){
	$scope.title="Angular-Http Services"; 
});

HttpApp.controller('usercontroller',function($scope,$http){
	
	$scope.tableHead="Kullanıcılar";
	var url ="https://jsonplaceholder.typicode.com/users";
	$http.get(url)
		.then(function(response){
			$scope.Users=response.data;
	});

	$scope.getUserCount=function(){
		return $scope.Users.length;
	};

	$scope.SearchResult=function(){
		$scope.userResult=$scope.Users.filter(function(item){
			return item.id==$scope.username;
		});

		$scope.username="";

		if(!$scope.userResult.length)
		{
			var uyari = document.getElementById("donnk");
			uyari.style.display = 'show';
			document.querySelector("#message").innerHTML= "Aradığınız Kullanıcı Bulunamadı";
		}
	};

});
