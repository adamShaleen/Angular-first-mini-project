// JavaScript
var app = angular.module('friendsList');

// creating controller for the HTML body
app.controller('mainCtrl', function($scope) {
    $scope.friends = ['Nathan', 'David', 'BJ', 'Scott'];

// function for adding new friends to list
$scope.addFriend = function(newFriend) {
    $scope.friends.push(newFriend);
    $scope.input = null;  // clears out input and scope
};

});
