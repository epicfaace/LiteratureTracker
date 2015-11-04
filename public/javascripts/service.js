/**
 * Created by Ramya on 10/29/2015.
 */
angular.module('literaturetrackerapp.services', [])
    .service('LiteratureService', function ($http) {
        var _self = this;

        _self.fetchData = function () {
            console.log('In service');
            return $http.get('/list').then(function (data) {
                console.log('Success from server: ', data);
                return data;
            }, function (error) {
                console.log('Error from server');
                return error;
            });
        };

        _self.addItem = function (literature) {
            console.log('Service.addItem() called.');
            return $http.post('/', literature).then(function (response) {
                console.log('Response from server: ', response);
                return response;
            }, function (err) {
                console.log('Error from server');
                return err;
            });
        };

        _self.sendEmail = function (recipient, subject, body) {
            var url = 'mailto:' + recipient + '?subject=' + subject + '&b' +
                'ody=' + body;
            $http.get(url).then(function (res) {
                return res;
            }, function (err) {
                return err;
            });
        };

        _self.writeReview = function (literature) {
            var id = literature._id;
            $http.put('/:' + id).then (function (res) {
                return res;
            }, function (err) {
                return err;
            });
        }
    });