module WebApplication {

    export interface ICustomer {
        id: number;
        name: string;
        total: number;
    }

    export interface IOrder {
        product: string;
        total: number;
    }

    export class DataService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getCustomers(): ng.IPromise<ICustomer[]> {
            return this.$http.get('/api/values').then(response => {
                return response.data;
            });
        }
 
    }

    angular.module('WebApplication')
        .service('WebApplication.dataService', DataService);

}
