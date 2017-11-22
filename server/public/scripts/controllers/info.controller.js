myApp.controller('InfoController', function ($http,UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.changeInfo = {};

  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.editInfo = function () {
    user = vm.changeInfo
    UserService.editInfo(user);
    console.log(vm.changeInfo);
    
  }

  vm.infoResult = UserService.infoResult;

  UserService.userInfo();


});
