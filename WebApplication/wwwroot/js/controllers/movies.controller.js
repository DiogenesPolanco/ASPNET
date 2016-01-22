var WebApplication;
(function (WebApplication) {
    'use strict';
    var MoviesController = (function () {
        function MoviesController(dataService) {
            var _this = this;
            this.Movies = null;
            dataService.getMovies()
                .then(function (movies) {
                _this.Movies = movies;
            });
        }
        MoviesController.$inject = ['WebApplication.dataService'];
        return MoviesController;
    })();
    angular.module('WebApplication')
        .controller('WebApplication.MoviesController', MoviesController);
})(WebApplication || (WebApplication = {}));
