/**
 * Created by Ramya on 10/29/2015.
 */
angular.module('literaturetrackerapp', ['literaturetrackerapp.services'])
    .controller('MainController', function (FetchData) {
        var vm = this;
        console.log('Calling service to fetch data..');
        vm.message = 'Hello!';
        //vm.literatures = FetchData.literatures;
        FetchData.fetchData().then(function (res) {
            vm.literatures = res.data;
            console.log('Success from service: ', vm.literatures);
        }, function (error) {
            vm.error = error;
            console.log('Error from service: ', error);
        });
    });