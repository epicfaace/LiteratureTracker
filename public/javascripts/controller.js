/**
 * Created by Ramya on 10/29/2015.
 */
angular.module('literaturetrackerapp', ['ngAnimate', 'ngMaterial', 'literaturetrackerapp.services'])
    .controller('MainController', function (LiteratureService) {
        var vm = this;

        vm.itemTypes = ['book', 'article', 'blog', 'academic paper'];
        vm.itemToAdd = {};
        vm.selectedType = null;
        vm.currItem = {};
        vm.editReview = false;

        vm.addToCollection = function () {
            vm.addItem = false;
            vm.itemToAdd.type = vm.selectedType;
            LiteratureService.addItem(vm.itemToAdd).then(function (response) {
                console.log('New Item added: ', vm.itemToAdd);
                console.log('Response from service: ', response);
            }, function (error) {
                console.log('Error from service: ', error);
            });
        };

        vm.shareArticle = function (article) {
            var subject = 'Checkout this article!';
            var body = 'I enjoyed reading this article, so sharing it with you! Give it a read! ' + article.url;
            vm.mailToHref = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            window.location = vm.mailToHref;
            //LiteratureService.sendEmail('', subject, body);
        };

        vm.addReview = function (literature) {
            vm.editReview = false;
            LiteratureService.writeReview(literature).then(function (res) {
                literature.review = res.data;
            }, function (err) {
                vm.error = err;
            });
            vm.updateTemplate = true;
        };

        LiteratureService.fetchData().then(function (res) {
            vm.literatures = res.data;
            console.log('Success from service: ', vm.literatures);
        }, function (error) {
            vm.error = error;
            console.log('Error from service: ', error);
        });
    });