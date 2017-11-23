myApp.controller('InfoController', function ($http,UserService, RevService) {
  console.log('InfoController created');
  var vm = this;
  vm.changeInfo = {};

  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.revService = RevService.reviews

  vm.editInfo = function () {
    user = vm.changeInfo
    UserService.editInfo(user);
    console.log(vm.changeInfo);
    
  }

  vm.infoResult = UserService.infoResult;
  
  window.onload = function () {
    UserService.userInfo();
    RevService.getReveiws();
  };


});
