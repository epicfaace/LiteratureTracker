/**
 * Created by Ramya on 10/29/2015.
 */
angular.module('literaturetrackerapp.routes', ['ui.router']).config(function ($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        controller: 'MainController as main'
    });
});