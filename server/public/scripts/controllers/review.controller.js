myApp.controller('RevController', function (UserService, SearchService,RevService) {
    console.log('RevController created');
    var vm = this;
    vm.userService = UserService;
    vm.game = { name: ''}
    vm.review = { id: 'this' }
    vm.searchGames = function () {
        game = vm.game
        SearchService.searchGames(game)
        
    }
    vm.addRev = function(){
        console.log(userId);
        rev = vm.review
        RevService.addRev(rev)
    }
    vm.searchResult = SearchService.searchResult;

    UserService.userInfo();

});

