'use strict';
(function () {
  angular.module('myMockData')
  .service('ProductDataModel', function UserDataModel() {
    this.products = {
      "products": [{
        "id":"1",
        "category": "Electronics",
        "product_name": "Fridge",
        "price":"1500", 
        "image":"assets/images/img1.jpg" 
      },
      {
        "id":"1",
        "category": "Electronics",
        "product_name": "Fridge",
        "price":"1500",
        "image":"assets/images/img1.jpg" 
      },
      {
        "id":"1",
        "category": "Household",
        "product_name": "Fridge",
        "price":"1500",
        "image":"assets/images/img1.jpg" 
      }]
    }


    this.getProducts = function () {
      return this.products;
    };

  })

})();

