'use strict';
(function(){
  angular.module('myMockData',['ngMockE2E'])
  .run(['$httpBackend','UserDataModel','ProductDataModel',function($httpBackend, UserDataModel,ProductDataModel) {
    $httpBackend.when('POST', /\/mock\/signup/).respond(function(method, url, data) {
      var _user = UserDataModel.getUser();
      return [200, _user, {}];
    })
    $httpBackend.when('GET', /\/mock\/auth/).respond(function(method, url, data) {
      var _user = UserDataModel.getUser();
      return [200, _user, {}];
    })
    $httpBackend.when('GET', /\/mock\/product/).respond(function(method, url, data) {
      var _product = ProductDataModel.getProducts();
      return [200, _product, {}];
    })

    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenPATCH(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
  }])

})();
