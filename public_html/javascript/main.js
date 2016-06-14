'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

/*------------------ Load RSS Feed -----------------*/
var App = angular.module('rssFeedApp', ['ngSanitize']);
App.controller('rssFeed', function ($scope, $http) {
    this.$http = $http;
    this.url = 'http://www.ensicaen.fr/feed/';

    this.feeds = this.$http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q='
            + encodeURIComponent(this.url)).then(function (res) {
        console.log(res.data.responseData.feed);
        $scope.feeds = res.data.responseData.feed;
    });
});

/*----------- Function Search -------------------*/
function contains(word_search, word_find) {
    if (word_search.indexOf(word_find) != -1)
        return true;
}
$("#searchText").keyup(function (event) {
        if(event.which == 13){
            $("#searchButton").click();
        }
        event.preventDefault();
    var searchText = $("#searchText").val().toLowerCase();
    $(".article").each(function () {
        if (!contains($(this).text().toLowerCase(), searchText))
            $(this).hide();
        else
            $(this).show();
    });
});

/*------------- Word Cloud --------------------*/
function refreshCanvas () {
    if (!$('#myCanvas').tagcanvas({
            textColour: '#265a88',
            outlineColour: '#990033',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
        }, 'tags')) {
        // something went wrong, hide the canvas container
        $('#myCanvasContainer').hide();
    }
}

setTimeout( function() { 
    refreshCanvas();
}, 1000);