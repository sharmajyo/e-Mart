var myapp=angular.module('myapp',["ui.router","myControllers","appConfig","myMockData",'myServices']);

angular.module('appConfig',[]).
constant('API_URL','http://localhost:8080/');

myapp.config(['$stateProvider',
  function ($stateProvider) {
    
    $stateProvider
      .state({
        name: 'main',
        controller: "MainController",
        url: '',
        templateUrl: 'sections/main/main.html'
      })

      .state({
        name: 'main.product',
        controller: "ProductController",
        url: '/product',
        templateUrl: 'sections/main/sections/product/product.html'
      })

      .state({
        name: 'main.product.overview',
        controller: "OverviewController",
        url: '/overview',
        templateUrl: 'sections/main/sections/product/sections/overview/overview.html'
      })

      .state({
        name: 'main.product.detail',
        controller: "DetailController",
        url: '/detail',
        templateUrl: 'sections/main/sections/product/sections/detail/detail.html'
      })


        .state({
        name: 'main.cart',
        controller: "CartController",
        url: '/cart',
        templateUrl: 'sections/main/sections/cart/cart.html'
      })


       .state({
        name: 'main.payment',
        controller: "PaymentController",
        url: '/payment',
        templateUrl: 'sections/main/sections/payment/payment.html'
      })


      .state({
        name: 'login',
        controller: "LoginController",
        url:'/login',
        templateUrl: 'sections/login/login.html'
      })      
       .state({
        name: 'signup',
        controller: "SignupController",
        url:'/new-user',
        templateUrl: 'sections/signup/signup.html'
      })      
  }])


myapp.run(['$rootScope','$state',
  function($rootScope,$state){
      $rootScope.hasUserLoggedIn=false;
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if ($rootScope.hasUserLoggedIn==false && toState.name.indexOf('main') != -1 ){
          $state.go('login');
          event.preventDefault();
         }
    })
  }
])
