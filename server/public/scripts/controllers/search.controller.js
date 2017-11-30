myApp.controller('SearchController', function (UserService, SearchService, RevService) {
    console.log('SearchController created');
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.game = { name: '' }
    vm.reviewer = {}
    vm.searchService = SearchService
    vm.searchObject = SearchService.searchResult
    vm.user = {}
    vm.reUser = SearchService.reUser
    vm.reviews = RevService.reviewResult
    vm.thisUserReviews = RevService.reviewUserResult
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

    vm.searchReviewers = function () {
        console.log('click');
        reviewer = vm.reviewer.name
        SearchService.searchReviewers(reviewer).then(function (response) {
            if (response) {
                console.log(response);

                vm.searchResults = response
                console.log('database res', vm.searchResults);
            } else {
                console.log('error in search service');
            }

        })
    }

    vm.thisUser = function () {
        user = vm.user.id
        console.log(user);
        
        SearchService.thisUser(user)
        RevService.getThisReviews(user)
    
    }

    vm.follow = function(){
        console.log('click follow');
        SearchService.follow(user)
    }

    vm.unfollow = function(){
        console.log('click unfollow');
        SearchService.unfollow(user)

    }
    window.onload = function () {
        UserService.userInfo();
        UserService.getuser();
    };


});