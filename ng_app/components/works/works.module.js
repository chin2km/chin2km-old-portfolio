(function () {
    "use strict";

    angular.module('chin2km.works', [
        "chin2km.works.controllers",
    ])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.when('/works', {
            controller: 'worksController',
            controllerAs: 'worksVM',
            templateUrl: 'ng_app/components/works/works.html?v=11.000'
        });
    }
})();