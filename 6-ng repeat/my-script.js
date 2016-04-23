//define module
var myApp = angular
				.module("myModule",[])
				.controller("myController", function($scope){
					var employees = [
							{firstname: "Maulik",lastname: "Gondalia",gender: "Male"},
							{firstname: "Vivek",lastname: "Gondalia",gender: "Male"},
							{firstname: "Sarita",lastname: "Gondalia",gender: "Female"}
					];
						

					$scope.employees = employees;
				})
				.controller("mySecondController", function($scope){
					var countries = [
						{
							name: "India",
							cities: [
								{name: "Gandhinagar"},
								{name: "Vadodara"},
								{name: "Hyderabad"}
							]
						},
						{
							name:"USA",
							cities: [
								{name: "Washington D.C."},
								{name: "Akron"},
								{name: "Los Angeles"}
							]
						}
					];

					$scope.countries = countries; 	
				});