//define module
var myApp = angular
				.module("myModule",[])
				.controller("myController", function($scope){
					var country = {
						name: "USA",
						capital: "Washington, D.C."
						source:"https://placehold.it/350x150"
					};

					$scope.country = country;
				});