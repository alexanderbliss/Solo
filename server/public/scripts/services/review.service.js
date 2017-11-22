myApp.service('RevService', function ($http, $location) {
    var self = this;
    self.addRev = function (rev) {
        console.log('added rev');
        $http.post('/review', rev).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }


});
