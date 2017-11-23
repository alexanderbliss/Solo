myApp.service('RevService', function ($http, $location) {
    var self = this;
    self.addRev = function (rev) {
        console.log('added rev');
        $http.post('/review', rev).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }

    self.getReviews = function(){
        console.log('got revs');
        $http.get('/review/reviews' + id).then(function(response){
            console.log(response);
            
        }).cathc(function(error){
        })
        
    }
});
