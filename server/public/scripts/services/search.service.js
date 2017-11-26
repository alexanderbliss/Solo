myApp.service('SearchService', function ($http, $location) {
var self = this

    self.searchResult = {}
    
    self.searchGames = function (game) {
        console.log('click');
        console.log(game);
        
        return $http.get('/game' , {params: game})
    }

    self.searchReviewers = function (reviewer) {
        console.log('click');
        console.log(reviewer);

        return $http.get('/user/reviewers/' + reviewer)
    }
});
