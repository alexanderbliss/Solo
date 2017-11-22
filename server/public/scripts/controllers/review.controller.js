myApp.controller('RevController', function (UserService, SearchService) {
    console.log('RevController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;

    vm.game = { name: ''}

    vm.searchGames = function () {
        game = vm.game
        SearchService.searchGames(game)
    }
});

