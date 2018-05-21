'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://placeimg.com/960/450/';
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;

    $scope.slides = [{
        title: 'Aprende a mantenerte en forma',
        image: baseURL + 'animals',
        text: '¡Practica algún deporte todos los días',
        id: currIndex++
      },
      {
        title: 'Buena alimentación',
        image: baseURL + 'tech',
        text: '¡La importancia de frutas y verduras en la dieta!',
        id: currIndex++
      },
      {
        title: 'En contacto con la naturaleza',
        image: baseURL + 'nature',
        text: '¡Mantente en armonía con la naturaleza!',
        id: currIndex++
      }
    ];

    var baseURL = 'http://placeimg.com/200/200/'
    $scope.contenido = [{
        img: baseURL + 'people',
        title: 'Sobre nosotros',
        summary: 'Somos una empresa comprometida con la vida sana'
      },
      {
        img: baseURL + 'architecture',
        title: 'Nuestros servicios',
        summary: 'Ofrecemos asesoría profesional para mantenerse sanos, buena alimentación'
      },
      {
        img: baseURL + 'sepia',
        title: 'Contáctanos',
        sumario: '#333, Buena vida Online, Plaza Central, Durance, Zip-323123'
      }
    ];

  });
