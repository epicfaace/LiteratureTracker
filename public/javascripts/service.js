/**
 * Created by Ramya on 10/29/2015.
 */
angular.module('literaturetrackerapp.services', [])
    .service('FetchData', function ($http) {
        var _self = this;
        _self.literatures = [
            {
                "_id": "5632cd8c7f340e744b7b37ac",
                "type": "book",
                "name": "El Pooch",
                "author": "Alex Nelson",
                "__v": 0
            },
            {
                "_id": "5632cdc87f340e744b7b37ad",
                "type": "book",
                "name": "The Flight",
                "author": "Scott Masterson",
                "__v": 0
            },
            {
                "_id": "5632cea87f340e744b7b37ae",
                "type": "article",
                "name": "Top 10 Australian beaches",
                "url": "http://www.101bestbeaches.com/",
                "__v": 0
            }
        ];

        _self.fetchData = function () {
            console.log('In service');
            return $http.get('/list').then(function (data) {
                console.log('Success from server: ', data);
                return data;
            }, function (error) {
                console.log('Error from server');
                return error;
            });
        }
    });