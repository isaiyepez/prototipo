'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [{
        title: "Alimentos buenos para la salud",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar nisl id lorem sagittis fringilla."
      },
      {
        title: "Alimentos menos buenos para la salud",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar nisl id lorem sagittis fringilla."
      },
      {
        title: "¡Limita tu cantidad de hidratos de carbono!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar nisl id lorem sagittis fringilla."
      }
    ];
  });
