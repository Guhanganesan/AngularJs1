myApp = angular.module("myModule", []);

myApp.controller( "myController", function($scope)
{
	var employee = { name: "Guhan", age:27, mob:979181, 
	photo:"dove-03.jpg" }
    
	$scope.x = "Welcome to Angular JS";	
    
	$scope.employee=employee;
	
	$scope.name="Guhan";
	
	var course = [ { name: "Guhan", like:0, dislike:0 },
		           { name: "Anbu", like:0, dislike:0 },
		           { name: "Ramesh", like:0, dislike:0 }
			     ];
			
    $scope.course=course;
			
	$scope.incrementNum = function(x1)
	{
		x1.like++;
	}	
	$scope.decrementNum = function(x1)
	{
		x1.dislike++;
	}	
	
});



