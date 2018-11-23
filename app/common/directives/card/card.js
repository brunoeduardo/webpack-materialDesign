//export const helloWorld = 'Hello world from imported JS!';

//import marvelModule from './app';

// marvelModule.directive('card', function() {

//   return {
//         restrict: 'E',
//         replace: true,
//         templateUrl: 'card.html',
//   };
// });


export default angular.module('card', [])
    .directive('my-dir', MyDirDirective);

function MyDirDirective() {
    return {
        restrict: 'E',
        scope: true,
        bindToController: {},
        controllerAs: '$ctrl',
        templateUrl: 'card.html',
    };
}