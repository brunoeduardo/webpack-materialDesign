import angular from 'angular';
import utils from '../provider/utils'

function searchService($log, utils) {
    var vm = this ? this : {},
        hash = '74a5d628d3e86d97d2f3ebfbf02b2ebd',
        apikey = '47fbbb8ce97fc46360c96f01d5179835',
        tsKeyHash = '?ts=1&apikey=' + apikey + '&hash=' + hash;


    vm.getSearch = function(paramUrl) {
        $log.info("Call service");
        let getInfo = 'http://gateway.marvel.com/v1/public/';
        return utils.getHttpPromise(getInfo + paramUrl + tsKeyHash);
    };
}


export default searchService