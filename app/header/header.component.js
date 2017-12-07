angular.module('fourWheels').component('header', {
    templateUrl: 'app/header/header.template.html',
    controllerAs: 'headerCtrl',
    binding: {
        title: '@'
    }
});