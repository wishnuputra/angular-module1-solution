(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.bonAppetit = "";
  var dishesList = [];

  $scope.checkIfTooMuch = function () {
    dishesList = $scope.dishes.split(',');
    if ($scope.dishes == "") {
      $scope.bonAppetit = "Please enter data first";
    } else if (dishesList.length <= 3) {
      $scope.bonAppetit = "Enjoy!";
    } else {
      $scope.bonAppetit = "Too much!"
    }
  };
}

})();
