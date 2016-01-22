var WebApplication;
(function (WebApplication) {
    var DataService = (function () {
        function DataService($http) {
            this.$http = $http;
        }
        DataService.prototype.getMovies = function () {
            return this.$http.get('/api/movie').then(function (response) {
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
