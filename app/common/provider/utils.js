import angular from 'angular';


function utils() {
    return {
        $get: ['$filter', '$http', '$q', '$rootScope', '$timeout', '$document', function ($filter, $http, $q, $rootScope, $timeout, $document) {
            return {
                getHttpPromise: function (url, config) {
                    let dfd = $q.defer();
                    $http.get(url, config).then(function (response) {
                        dfd.resolve(response.data);
                    }, function (response) {
                        dfd.reject('Cannot GET ' + url);
                    });
                    return dfd.promise;
                }
            }
        }]
    }
}

export default utils
