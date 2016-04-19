//define module
var myApp = angular
				.module("myModule",[])
				.controller("myController", function($scope){
					var employee ={
						firstname: "Vivek",
						lastname:"Gondalia",
						gender:"Male"
					};

					$scope.employee = employee;
				});
