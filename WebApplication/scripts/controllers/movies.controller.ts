module WebApplication {
    'use strict';

    class MoviesController {
        Movies: IMovie[] = null;

        static $inject = ['WebApplication.dataService'];
        constructor(dataService: DataService) {
            dataService.getMovies()
              .then((movies: IMovie[]) => {
                 this.Movies = movies;
              });
        }
    }

    angular.module('WebApplication')
           .controller('WebApplication.MoviesController', MoviesController);

}
