'use strict';
(function () {
  angular.module('myMockData')
  .service('UserDataModel', function UserDataModel() {
    this.user = {
      "user": {
        "created_at": "2015-04-27T02:10:17.442Z",
        "updated_at": "2015-04-27T02:10:17.442Z",
        "email": "joe.test@promisepay.com"
      }
    }


    this.getUser = function () {
      return this.user;
    };

  })

})();

