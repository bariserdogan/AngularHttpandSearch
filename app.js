var HttpApp = angular.module('HttpandSearch', []);

HttpApp.controller('titleCont',function($scope){
	$scope.title="Angular-Http Services"; 
});

HttpApp.controller('usercontroller',function($scope,$http){

	$scope.tableHead="Kullanıcılar";
	// Http servisi ile url'den veriyi get metodu ile çekiyoruz
	// Veri json parse edilmiş olarak response parametresine atanmış bir şekilde geliyor
	$http({
		method:'GET',
		url:"https://jsonplaceholder.typicode.com/users"
	}).then(function successGet(response){
			$scope.Users=response.data
		},function errorGet(response){
			$scope.validation = response.statusText;
	});

	//Toplam kişi sayısını döndüren metod
	$scope.getUserCount=function(){
		return $scope.Users.length;
	};

	$("#donnk").css('display','none');

	$scope.SearchResult=function(){
		$scope.userResult=$scope.Users.filter(function(item){
			return item.id==$scope.username;
		});

		$scope.username="";
		// yalnış bir id girildiği takdirde bs3-alert ile mesaj verilecek 
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
