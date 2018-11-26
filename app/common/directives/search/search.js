import angular from 'angular';


function search() {
  return {
    restrict: 'E',
    templateUrl: './common/directives/search/search.html' 
  }
}

export default angular.module('directives.search', [])
  .directive('search', search)
  .name;