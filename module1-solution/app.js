(function(){
'use strict'
angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject= ['$scope'];
function LunchCheckController($scope){
  $scope.foodname ="";
  $scope.msg ="";

  $scope.calculateItems= function(){
    $scope.msg="Enjoy";
    $scope.fontColor ="";
    var foodArray = $scope.foodname.split(",");

   if ( $scope.foodname.length == 0 )
    {
       $scope.msg="First enter data !";
       $scope.fontColor = "red";
    }
    else {
      var no = foodArray.length;
      $scope.fontColor = "green";
      if ( no <= 3)
      {
         $scope.msg="Enjoy"; }
         else {
           $scope.msg="Too much";
         }
      }
     }
};
})();
