var WebApplication;
(function (WebApplication) {
    'use strict';
    var CustomersController = (function () {
        function CustomersController(dataService) {
            var _this = this;
            this.customers = null;
            dataService.getCustomers()
                .then(function (custs) {
                _this.customers = custs;
            });
        }
        CustomersController.$inject = ['WebApplication.dataService'];
        return CustomersController;
    })();
    angular.module('WebApplication')
        .controller('WebApplication.CustomersController', CustomersController);
})(WebApplication || (WebApplication = {}));
