<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<style>
        table,td {border:1px solid blue; border-collapse:collapse;}
		td{width:100px; height:50px; text-align:center;}
</style>
<body>
<div ng-app="myApp" ng-controller="myCtrl"> 
<table>
       <tr ng-repeat="y in x">
	       <td>{{y.userId}}</td>
	       <td>{{y.id}}</td>
	       <td>{{y.title}}</td>
	   </tr>
</table>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){$scope.x = response.data;});
});
</script>
</body>
</html>
