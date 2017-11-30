myApp.service('RevService', function ($http, $location) {
    var self = this;
    self.review = {}
    self.reviewResult = {}
    self.thisReview = {}
    self.getComment = {}
    self.revToSee= {}
    self.commentInfo = {}
    self.homeResults={}
    self.reviewUserResult={}
    var revId = ""

    self.addRev = function (rev) {
        console.log('added rev');
        $http.post('/review', rev).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }

    self.seeReview = function () {
        self.revToSee.data = self.thisReview
    }

    self.getReviews = function () {
        console.log('got revs');
        $http.get('/review/reviews/' + id).then(function (response) {
            console.log(response);
            self.reviewResult.data = response.data;
        }).catch(function (error) {
        })
    }

    self.getThisReviews = function () {
        console.log('got user revs');
        console.log(user);
        
        $http.get('/review/reviews/this/' + user).then(function (response) {
            console.log(response);
            self.reviewUserResult.data = response.data;
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
            self.thisReview.data = response;
            console.log(self.thisReview);
            revId = self.thisReview.data.data[0].id
            console.log(revId);
        }).catch(function (error) {
        })
    }

    self.postComment = function (com , revId) {
        console.log('post com', com, revId);
        
        $http.post('/review/comment/' + id , com).then(function (response) {
            self.getComments();
            console.log(response);
        }).catch(function (error) {
        })
    }

    self.getComments = function(){
        console.log();
        
        console.log('got revs');
        $http.get('/review/comment/' + revId).then(function (response) {
            console.log(response);
            self.getComment.data = response;
            console.log(self.getComment);
            
        }).catch(function (error) {
        })
    }

    self.getHomeReviews = function () {
        $http.get('/review/home/reviews/').then(function (response) {
            console.log(response);
            self.homeResults.data = response.data;
        }).catch(function (error) {
        })
    }

    self.deleteRev = function (delId) {
        $http.delete('/review/thisReview/' + delId).then(function (response) {
            console.log(response);
        }).catch(function (error) {
        })
    }
});