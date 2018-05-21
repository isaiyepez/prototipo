'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures = $scope.pictures = [];

    var baseURL = 'http://placeimg.com/300/180/';

    var titles = ["Comida Sana", "Salud y trabajo", "Vida en la ciudad", "Mantente activo", "Cuida tu aspecto",
      "¡¡Vida nocturna!!"
    ];

    var keywords = ["grayscale", "sepia", "people", "tech", "animals", "architecture"];

    var dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar nisl id lorem sagittis fringilla. Phasellus iaculis arcu a tincidunt ultrices. Sed orci mauris, finibus ac ultricies a, luctus vel felis."

    $scope.addPics = function (i) {
      pictures.push({
        url: baseURL + keywords[i],
        title: titles[i],
        summary: dummyText
      });
    };
    for (var i=0; i<5; i++)
    {
      $scope.addPics(i);
    }
    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadOnly = false;

  });
