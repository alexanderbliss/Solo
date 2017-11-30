myApp.controller('LoginController', function($http, $location, UserService, RevService) {
    console.log('LoginController created');
    var vm = this;
    vm.homeReviews = RevService.homeResults
    vm.user = {
      username: '',
      password: '',
      real_name: '',
      email: '',
      Bio: '',
      text1: '',
      text2: '',
      vid1:'',
      vid2:''
    };
    vm.message = '';

    vm.login = function() {
      console.log('LoginController -- login');
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Enter your username and password!";
      } else {
        $http.post('/', vm.user).then(function(response) {
          if(response.data.username) {
            console.log('LoginController -- login -- success: ', response.data);
            // location works with SPA (ng-route)
            $location.path('/info'); // http://localhost:5000/#/info
          } else {
            console.log('LoginController -- login -- failure: ', response);
            vm.message = "Wrong!!";
          }
        }).catch(function(response){
          console.log('LoginController -- registerUser -- failure: ', response);
          vm.message = "Wrong!!";
        });
      }
    };

    RevService.getHomeReviews();

    vm.registerUser = function() {
      console.log('LoginController -- registerUser');
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Choose a username and password!";
      } else {
        console.log('LoginController -- registerUser -- sending to server...', vm.user);
        $http.post('/register', vm.user).then(function(response) {
          console.log('LoginController -- registerUser -- success');
          $location.path('/home');
        }).catch(function(response) {
          console.log('LoginController -- registerUser -- error');
          vm.message = "Please try again."
        });
      }
    }
}).controller('DemoCtrl', function ($scope) {
}).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  }).controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.openMenu = function ($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    this.notificationsEnabled = true;
    this.toggleNotifications = function () {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    this.redial = function () {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );
      originatorEv = null;
    };
  });
