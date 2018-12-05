import angular from 'angular';
import materialDesign from '../../../config/material';

function search($log) {
  return {
    restrict: 'E',
    templateUrl: './common/directives/search/search.html',
    scope: {
        searchItem: '&',
    },
    link: function (scope, element, attrs) {
      scope.searchTxt = searchTxt;

      function searchTxt() {
        $log.info("Call search");
        scope.searchItem({param: scope.searchValue});
      };
    }
  }
}

export default angular.module('directives.search', [materialDesign])
  .directive('search',  search)
  .name;