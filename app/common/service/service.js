import angular from 'angular';

function SearchService($resource, $promise, $http , $log, $q, $timeout) {
    let vm = this,
        hash = '74a5d628d3e86d97d2f3ebfbf02b2ebd',
        apikey = '47fbbb8ce97fc46360c96f01d5179835',
        tsKeyHash = 'ts=1&apikey=' + apikey + '&hash=' + hash,
        getInfo = $resource('http://gateway.marvel.com/v1/public/characters' + tsKeyHash);

    $log.log("test");

    vm.getSearchCharacter = function() {
        $log.info("Call service");
        return getInfo.get().$promise.then(function(data) {
            $log.log("data ==>", data);
           
          });
    };
}

export default angular.module('services.search-service', [])
  .service('searchService',  SearchService)
  .name;