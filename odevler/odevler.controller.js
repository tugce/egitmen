(function () {
    'use strict';

    angular
        .module('app')
        .controller('OdevlerController', OdevlerController);

    OdevlerController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function OdevlerController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        function odevler() {
            vm.dataLoading = true;
            
        };
    }

})();