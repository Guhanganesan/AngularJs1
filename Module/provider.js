myApp = angular.module("myModule", []);

/*
myApp.provider("myProvider", function(){
	 this.$get=function(){
		 console.log("$get called");
		 return "My Value";
	 };
});
*/

myApp.service("myProvider", function(){
	console.log("service called");
	 this.getValue=function(){
		 return "My Value";
	 };
})

myApp.controller( "myController", function(myProvider)
{
  console.log("MyProvider:"+myProvider.getValue());  
});

myApp.controller( "myController1", function(myProvider)
{
  console.log("MyProvider:"+myProvider.getValue());  
});


