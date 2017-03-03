(function(){
'use strict'
angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject= ['$scope'];
function LunchCheckController($scope){
  $scope.foodname ="";

  $scope.calculateItems= function(foodname){
    const separator =',';
    var foodArray = foodname.split(separator);
    $scope.msg="";
    $scope.count=0;
    console.log(foodArray);


  if ( foodArray == "" )
       $scope.msg="First enter data !";
  else
  {
    for( var i=0;i<foodArray.length;i++)
      {
      console.log(foodArray[i]);
      if ( foodArray[i] === ' ' || foodArray[i]=== ''){
        console.log(foodArray[i]);
        continue;
      }
      $scope.count++;
    }
    console.log($scope.count);
    if ($scope.count <= 3)
       $scope.msg="Enjoy";
    else
        $scope.msg="Too much !";
   }
  }
};
})();
