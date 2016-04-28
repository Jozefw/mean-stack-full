var meanApp = angular.module('meanApp', ['ngRoute']);


meanApp.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'home.html',
            controller: 'appCtrl'
        })
})


meanApp.controller('appCtrl', ["$scope","$http", function($scope, $http){
    // in our view we did appCtrl as App so the controller is no app
    var app = this;
    var url = "http://localhost:3000/add";

    // this array will capture the stuff from mongo's db when they come back'
    app.thingFromMongo = [];

    app.submit = function(thing){
        console.log(thing);
        // the value of thing below comes from aboves params passed from ng-model in form field
        $http.post(url);

    };

}])