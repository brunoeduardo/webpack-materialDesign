import angular from 'angular';

function card() {
  return {
    restrict: 'E',
    templateUrl: './common/directives/card/card.html' 
  }
}

export default angular.module('directives.card', [])
  .directive('card', card)
  .name;