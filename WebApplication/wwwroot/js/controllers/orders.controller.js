var WebApplication;
(function (WebApplication) {
    var OrdersController = (function () {
        function OrdersController($routeParams, dataService) {
            var _this = this;
            this.customerId = $routeParams.customerId;
            dataService.getOrder(this.customerId)
                .then(function (orders) {
                _this.orders = orders;
            });
        }
        OrdersController.$inject = ['$routeParams', 'WebApplication.dataService'];
        return OrdersController;
    })();
    angular.module('WebApplication')
        .controller('WebApplication.OrdersController', OrdersController);
})(WebApplication || (WebApplication = {}));
