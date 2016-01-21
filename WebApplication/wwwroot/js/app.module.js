var WebApplication;
(function (WebApplication) {
    'use strict';
    angular.module('WebApplication', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            /*$routeProvider.when('/',
                {
                    controller: 'WebApplication.CustomersController',
                    templateUrl: 'Databinding',
                    controllerAs: 'vm'
                })
                .when('/orders/:customerId',
                {
                    controller: 'WebApplication.OrdersController',
                    templateUrl: 'views/orders',
                    controllerAs: 'vm'
                });*/
        }]);
})(WebApplication || (WebApplication = {}));
