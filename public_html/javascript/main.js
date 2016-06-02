

'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

var App = angular.module('rssFeedApp', []);
App.controller('rssFeed', function ($scope,$http) {
    this.$http = $http;
    this.url = 'http://www.ensicaen.fr/feed/';

    this.feeds = this.$http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q='
      + encodeURIComponent(this.url)).then(function (res) {
      console.log(res.data.responseData.feed);
      $scope.feeds = res.data.responseData.feed;
    });


  });
