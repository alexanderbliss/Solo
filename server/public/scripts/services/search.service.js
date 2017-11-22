myApp.service('SearchService', function ($http, $location) {
var self = this


    self.searchGames = function (game) {
        console.log('click');
        console.log(game);
        
        $http.get('/game' , {params: game}).then(function (response) {
            if (response) {
                console.log(response);
            } else {
                console.log('error in search service.');
            }
        }, function (response) {
            console.log(response);
            
        });
    }
});
