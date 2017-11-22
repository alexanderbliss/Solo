myApp.controller('SearchController', function (UserService, SearchService) {
    console.log('SearchController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;


});
