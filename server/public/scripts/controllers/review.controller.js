myApp.controller('RevController', function (UserService) {
    console.log('RevController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
});
