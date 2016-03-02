(function(){
    'use strict';
    angular.module('people.services')
        .factory('peopleDataFactory', ['$http', function($http){
            return {
                getPeopleData: getPeopleData
            };

            function getPeopleData() {
                return $http.get('./data/data.json');
            }
        }]);
})();
