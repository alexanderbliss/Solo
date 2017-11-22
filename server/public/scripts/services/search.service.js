myApp.service('SearchService', function ($http, $location) {
var self = this

    self.searchResult = {}
    
    self.searchGames = function (game) {
        console.log('click');
        console.log(game);
        
        $http.get('/game' , {params: game}).then(function (response) {
            if (response) {
                self.searchResult = response
                console.log('api res', self.searchResult);
            } else {
                console.log('error in search service.');
            }
        })
    }
});
