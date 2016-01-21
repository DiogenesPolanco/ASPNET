module WebApplication {
    'use strict';

    class CustomersController {
        customers: ICustomer[] = null;

        static $inject = ['WebApplication.dataService'];
        constructor(dataService: DataService) {
            dataService.getCustomers()
              .then((custs: ICustomer[]) => {
                 this.customers = custs;
              });
        }
    }

    angular.module('WebApplication')
           .controller('WebApplication.CustomersController', CustomersController);

}
