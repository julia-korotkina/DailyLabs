﻿var app = angular.module('DailyLabsApp', ['ngRoute'])

    .factory('DiaryService', function ($http) {

        var diaryService = {
            get: function() {
                var promise = $http.get('http://dailylabs.herokuapp.com/api/test/diary.json').then(function (response) {
                    return response.data;
                });
                return promise;
            },

            put: function (data) {

                var request = {
                    method: 'PUT',
                    url: 'http://dailylabs.herokuapp.com/api/test/diary.json',
                    data: angular.toJson(data)
                }

                return $http(request);
            }
        };
        return diaryService;

    })

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'DiaryController as diaryCtrl',
                templateUrl:'templates/diary.html',
            })
            .otherwise({
                redirectTo:'/'
            });
    });





	