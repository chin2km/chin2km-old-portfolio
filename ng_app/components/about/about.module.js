(function () {
    "use strict";

    angular.module('chin2km.about', [
        "chin2km.about.controllers",
    ])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.when('/about', {
            controller: 'aboutController',
            controllerAs: 'aboutVM',
            templateUrl: 'ng_app/components/about/about.html?v=11.000'
        });
    }

})();