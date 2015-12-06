(function () {
    'use strict';

    angular
        .module('app')
        .controller('CalismaController', CalismaController);

    CalismaController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function CalismaController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        function odevler() {
            vm.dataLoading = true;
            
        };
    }

})();