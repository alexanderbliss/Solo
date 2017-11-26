myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;
  self.userObject = {};
  self.infoResult = { data: [] }
  
  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        self.userObject.id = response.data.userId
        console.log('UserService -- getuser -- User Data: ', self.userObject);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    }, function (response) {
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });
  }

    self.userInfo = function () {
        console.log('click');
      var userName = self.userObject.userName;
    $http.get('/user/' + userName)
    .then(function (response) {
          if (response) {
            console.log(response);
            self.user = response
            self.infoResult.data = response.data
            console.log(self.infoResult.data);
            
          } else {
            console.log('UserService error');
          }
        })
      }
  self.editInfo = function (user) {
    console.log('click');
    var userName = self.userObject.userName;
    $http.put('/user/' + userName, user)
      .then(function (response) {
        if (response) {
          self.userInfo()
        } else {
          console.log('UserService error');
        }
      })
  }

      self.logout = function () {
        console.log('UserService -- logout');
        $http.get('/user/logout').then(function (response) {
          console.log('UserService -- logout -- logged out');
          $location.path("/home");
        });
      }
    });
