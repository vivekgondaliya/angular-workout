//define module
var myApp = angular
				.module("myModule",[])
				.controller("myController", function($scope){
					var employee = {
						firstname: "Maulik",
						lastname: "Gondalia",
						gender: "Male"
					};

					$scope.employee = employee;
				});