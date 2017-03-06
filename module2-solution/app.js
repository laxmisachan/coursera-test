(function(){
'use strict';
angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var ToBuyList = this;
    ToBuyList.itemsTobuy = ShoppingListCheckOffService.getitemsToBuy();

    ToBuyList.moveItem = function(itemIndex){
      ShoppingListCheckOffService.moveItem(itemIndex);
        
    };

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var AlreadyBoughtList = this;
  AlreadyBoughtList.itemsBought = ShoppingListCheckOffService.getitemsBought();

}

function ShoppingListCheckOffService() {
   var service =this;
   var itemsTobuy=[
     {name:"Cookies " , quantity:"3 packets"},
     {name:"Bread   " , quantity:"1 packets"},
     {name:"Eggs    " , quantity:"3 boxes  "},
     {name:"Cheese  " , quantity:"3 packets"},
     {name:"Milk    " , quantity:"2 bottles"},
     {name:"Carrots " , quantity:"3 packets"},
     {name:"Broccoli" , quantity:"3 packets"}
   ];
   var itemsBought = [];

   service.getitemsToBuy = function(){
     return itemsTobuy;
   };

   service.getitemsBought = function(){
     return itemsBought ;
   };

   service.moveItem = function(itemIndex){
     var item = { name:"" , quantity:""};
     item = itemsTobuy[itemIndex];
     itemsTobuy.splice(itemIndex,1);
     itemsBought.push(item);
   };


}

})();
