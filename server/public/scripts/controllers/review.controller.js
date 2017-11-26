myApp.controller('RevController', function (UserService, SearchService, RevService) {
    console.log('RevController created');
    var vm = this;
    var userId;
    var gameData;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.revService = RevService
    vm.revToSee = RevService.revToSee
    vm.thisReview = self.thisReview
    vm.searchService = SearchService
    vm.searchObject = SearchService.searchResult

    vm.game = { name: '' }
    vm.review = {
        id: vm.userObject.id,
        game: gameData
    }
    vm.searchGames = function () {
        game = vm.game
        SearchService.searchGames(game).then(function (response) {
            if (response) {
                vm.searchResult = response
                console.log('api res', vm.searchResult);
            } else {
                console.log('error in search service.');
            }
        })
    }
    vm.addGame = function () {
        console.log('click game', vm.review.game);
    }
    vm.addRev = function () {
        rev = vm.review
        console.log(rev);
        RevService.addRev(rev)
    }
    vm.infoResult = UserService.infoResult;
    RevService.seeReview();

    window.onload = function () {
        UserService.userInfo();
        UserService.getuser();
    };
})