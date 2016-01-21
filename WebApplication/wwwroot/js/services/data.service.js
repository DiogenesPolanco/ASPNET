var WebApplication;
(function (WebApplication) {
    var DataService = (function () {
        function DataService($http) {
            this.$http = $http;
        }
        DataService.prototype.getCustomers = function () {
            return this.$http.get('/api/values').then(function (response) {
                return response.data;
            });
        };
        DataService.prototype.getOrder = function (key) {
            var params = { id: key };
            return this.$http.get('/orders.json', params).then(function (response) {
                return response.data;
            });
        };
        DataService.$inject = ['$http'];
        return DataService;
    })();
    WebApplication.DataService = DataService;
    angular.module('WebApplication')
        .service('WebApplication.dataService', DataService);
})(WebApplication || (WebApplication = {}));
