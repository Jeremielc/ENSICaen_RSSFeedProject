'use strict';

/**
 * Déclaration de l'application rssFeed.
 */
var rssFeed = angular.module('rssFeed', [
    //Dépendances du "module"
    'articleList',
    'sumarry'
]);

/**
 * Déclaration du module articleList et sumarry.
 */
var articleList = angular.module('articleList',[]);
var sumarry = angular.module('sumarry', []);

/**
 * Contrôleur de l'application "Article List".
 */
articleList.controller('articleController', ['$scope',
    function ($scope) {
        var articles = $scope.articles = [];
        var feedList = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://www.ensicaen.fr/feed";
        document.writeln(feedList);
    }
]);

/**
 * Contrôleur de l'application "Sumarry".
 */
sumarry.controller('sumarryController', ['$scope',
    function ($scope) {
        var titles = $scope.titles = [];
    }
]);
