var Myapp1 = angular.module('Myapp', []);

Myapp1.controller('controller', function ($scope) {
    $scope.range = 1;
    $scope.myArray = '';

    $scope.returnArray = function (range) {
        var e = '1';
        for (i = 2; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                e += ', fizzbuzz';
            } else if (i % 5 == 0) {
                e += ', buzz';
            } else if (i % 3 == 0) {
                e += ', fizz';
            } else {
                e += ', ' + i;
            }
        }
        $scope.myArray = e;
    };
    $scope.returnArray($scope.range); 
});