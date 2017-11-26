myApp.controller('InfoController', function ($http,UserService, RevService) {
  console.log('InfoController created');
  var vm = this;
  vm.changeInfo = {};
  vm.revId = {}
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.reviews = RevService.reviewResult
  
  vm.editInfo = function () {
    user = vm.changeInfo
    UserService.editInfo(user);
    console.log(vm.changeInfo);
    
  }
  
  vm.infoResult = UserService.infoResult;
  
  vm.viewReview = function (){
    rev = vm.revId
    id = vm.userObject.id
    RevService.viewReview(rev, id)
  }

  window.onload = function () {
  };
  UserService.userInfo();
  UserService.getuser();
  id = vm.userObject.id
  RevService.getReviews(id)

  console.log(id);


});
