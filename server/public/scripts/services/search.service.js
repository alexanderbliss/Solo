myApp.service('SearchService', function ($http, $location) {
var self = this

    self.searchResult = {}
    self.reUser = {}
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

    self.thisUser = function(user){
        console.log('click');
        console.log(user);
        $http.get('/user/this/' + user).then(function (response) {
            self.reUser.data = response
            console.log(self.reUser.data);
        })
    }
    

self.follow = function(user){
    $http.post('/follow/'+ user).then(function (response) {
        console.log(response);
    }).catch(function (error) {
    })
}

    self.unfollow = function (user) {
        $http.delete('/follow/' + user).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }







});

