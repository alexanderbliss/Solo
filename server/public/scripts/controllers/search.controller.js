myApp.controller('SearchController', function (UserService, SearchService) {
    console.log('SearchController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.game = { name: '' }
    vm.reviewer = {}
    vm.searchService = SearchService
    vm.searchObject = SearchService.searchResult

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

    vm.searchReviewers = function(){
        console.log('click');
    reviewer = vm.reviewer.name
    SearchService.searchReviewers(reviewer).then(function(response){
        if(response){
            console.log(response);
            
            vm.searchResults = response
            console.log('database res', vm.searchResults);
        }else{
            console.log('error in search service');
        }
    
    })
    }

    window.onload = function () {
        UserService.userInfo();
        UserService.getuser();
    };
});
