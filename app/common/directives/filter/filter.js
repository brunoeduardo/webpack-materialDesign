import angular from 'angular';
import materialDesign from '../../../config/material';

function filter($log) {
  return {
    restrict: 'E',
    templateUrl: './common/directives/filter/filter.html',
    scope: {
        filterItem: '&',
    },
    link: function (scope, element, attrs) {
        scope.filterTxt = filterTxt;
      
        function filterTxt() {
            scope.filterItem({param: scope.filterValue});
        };
    }
  }
}

export default angular.module('directives.filter', [materialDesign])
  .directive('filter',  filter)
  .name;