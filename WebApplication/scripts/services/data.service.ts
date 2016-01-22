module WebApplication {

    export interface IMovie {
        ID: number;
        Title: string;
        Genre: string;
        Price: number;
        ReleaseDate: Date; 
        Total: number;
    }
 
    export class DataService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getMovies(): ng.IPromise<IMovie[]> {
            return this.$http.get('/api/movie').then(response => {
                return response.data;
            });
        }
 
    }

    angular.module('WebApplication')
        .service('WebApplication.dataService', DataService);

}
