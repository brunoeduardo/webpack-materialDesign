import angular from 'angular';
import materialDesign from '../../../config/material';

function search() {
  return {
    restrict: 'E',
    templateUrl: './common/directives/search/search.html' 
  }
}

export default angular.module('directives.search', [materialDesign])
  .directive('search',  search)
  .name;