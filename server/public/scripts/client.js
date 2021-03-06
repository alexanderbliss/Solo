var myApp = angular.module('myApp', ['ngRoute', 'ngYoutubeEmbed', 'ngMaterial', 'textAngular', 'jkAngularRatingStars']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as ic',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/addRev', {
      templateUrl: '/views/templates/addRev.html',
      controller: 'RevController as rc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/search', {
      templateUrl: '/views/templates/search.html',
      controller: 'SearchController as sc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/review', {
      templateUrl: '/views/templates/review.html',
      controller: 'RevController as rc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/game',{
      templateUrl: '/views/templates/game.html',
      controller: 'GameController as gc',
      resolve:{
        getuser:function(UserService){
          return UserService.getuser();
        }
      }
    }).when('/viewProfile', {
      templateUrl: '/views/templates/veiwProfile.html',
      controller: 'SearchController as sc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/about', {
      templateUrl: '/views/templates/about.html',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
// window.onload = function () {
//   changeBackground();

// };

//   var images = ['./Pictures/Halo.png',
//     '../Pictures/Chrono.png',
//     './Pictures/LOU.jpg',
//     './Pictures/Spiderman.jpg',
//     './Pictures/Zelda.jpg',];

//   var randomNumber = Math.floor(Math.random() * images.length);
//   var bgImg = images[randomNumber];

//   function changeBackground(){
    
//   body.css({ 'background': bgImg, 'background-size': 'cover', });
//   }

