myApp = angular.module("myModule", []);

myApp.controller( "myController", function($scope)
{

	var employees = [ 
	                  {name:"Guhan", DOB: new Date("July 20, 1990"), gender:"Male", salary:15000, Bonus:2000},
	                  {name:"Anbu", DOB:new Date("August 21, 1991") , gender:"Male", salary:12000,Bonus:3000},
					  {name:"Rajesh", DOB: new Date("September 22, 1992"), gender:"Male", salary:17000,Bonus:1000},
					  {name:"Komathi", DOB:new Date("October 23, 1993") , gender:"Female", salary:18000,Bonus:4000},
	                  {name:"Kannan", DOB: new Date("November 24, 1994"), gender:"Male", salary:19000,Bonus:2500},
		            ];
			
    $scope.employees=employees;
	//$scope.dataLimit = 3;
	$scope.sortColumn = "name";
			
});



