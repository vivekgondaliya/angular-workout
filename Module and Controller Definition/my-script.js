//define module
var myApp = angular.module("myModule",[]);

//define controller
var myController = function($scope){
	$scope.message = "Hello World!";
};

//register the controller with the module
myApp.controller("myController", myController);

/* 
	//create and register the controller
	myApp.controller("myController", function($scope){
		$scope.message = "Hello World!";
	});
*/