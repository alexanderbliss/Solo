myApp.controller('RevController', function ($sce, UserService, SearchService, RevService) {
    console.log('RevController created');
    var vm = this;
    var delId = {};
    var userId;
    var gameData;
    vm.readOnly = true
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.revService = RevService;
    vm.revToSee = RevService.revToSee;
    vm.thisReview = self.thisReview;
    vm.searchService = SearchService;
    vm.searchObject = SearchService.searchResult;
    vm.getComment = RevService.getComment;
    vm.game = { name: '' };
    vm.review = {
        id: vm.userObject.id,
        game: gameData
    };
    vm.comment = {};

    vm.searchGames = function () {
        game = vm.game;
        SearchService.searchGames(game).then(function (response) {
            if (response) {
                vm.searchResult = response;
                console.log('api res', vm.searchResult);
            } else {
                console.log('error in search service.');
            };
        });
    };

    vm.trustHtml = function(htmlString){
        return $sce.trustAsHtml(htmlString);
    }

    vm.addGame = function () {
        console.log('click game', vm.review.game);
    }
    vm.addRev = function () {
        rev = vm.review;
        console.log(rev);
        RevService.addRev(rev);
    }
    vm.infoResult = UserService.infoResult;
    RevService.seeReview();
    RevService.getComments();

    vm.postComment = function(){
        
        var com = vm.comment;
        revId = vm.comment.revId;
        RevService.postComment(com,revId);
        

    }
        
    
    window.onload = function () {
        UserService.userInfo();
        UserService.getuser();
    };

    vm.deleteRev = function () {
        console.log('click');
        
        delId = vm.delId;
        RevService.deleteRev(delId);
    }
}).controller('AppCtrl', function ($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    })