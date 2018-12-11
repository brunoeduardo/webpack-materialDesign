import angular from 'angular';
import utils from '../provider/utils'

function searchService($log, utils) {
    var vm = this ? this : {},
        hash = '74a5d628d3e86d97d2f3ebfbf02b2ebd',
        apikey = '47fbbb8ce97fc46360c96f01d5179835',
        tsKeyHash = '?ts=1&apikey=' + apikey + '&hash=' + hash,
        getInfo = 'http://gateway.marvel.com/v1/public/characters';


    vm.test = function (){
        console.log("ok")
    };

    vm.getSearchCharacter = function() {
        $log.info("Call service");
        return utils.getHttpPromise(getInfo + tsKeyHash);
    };
}

// export default angular.module('marvelApp.service', [])
//   .service('searchService',  searchService)
//   .name;

export default searchService