myApp.service('RevService', function ($http, $location) {
    var self = this;
    self.review = {}
    self.reviewResult = {}
    self.thisReview = {}
    self.getComment = {}
    
    self.addRev = function (rev) {
        console.log('added rev');
        $http.post('/review', rev).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }

    self.seeReview = function () {
        self.revToSee = self.thisReview
    }

    self.getReviews = function (id) {
        console.log('got revs');
        $http.get('/review/reviews/' + id).then(function (response) {
            console.log(response);
            self.reviewResult = response;
        }).catch(function (error) {
        })
    }

    self.editInfo = function (user) {
        console.log('click');
        var userName = self.userObject.userName;
        $http.put('/user/' + userName, user)
            .then(function (response) {
                if (response) {
                    self.userInfo()
                } else {
                    console.log('UserService error');
                }
            })
    }

    self.viewReview = function (rev, id) {
        self.review.rev = rev
        self.review.id = id
        revToSend = self.review
        $http.get('/review/thisReview/' + id, { params: { rev, id } }).then(function (response) {
            console.log(response);
            self.thisReview = response;
            console.log(self.thisReview);
        }).catch(function (error) {
        })
    }

    self.postComment = function (com) {
        console.log(id);
        console.log(com);
        $http.post('/review/comment/' + id ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }

    self.getComments = function(){
        console.log('got revs');
        $http.get('/review/comment/' + id).then(function (response) {
            console.log(response);
            self.getComment = response;
        }).catch(function (error) {
        })
    }
});