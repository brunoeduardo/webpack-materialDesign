import angular from 'angular';
import materialDesign from '../../config/material';
import { MDCDialog } from '@material/dialog';

function characters($scope) {
    let dialog;

    $scope.openDetail = openDetail;

    setTimeout(function () {
        dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    }, 1000);
    
    function openDetail() {
        dialog.open();
    } 
}

export default angular.module('controller.characters', [materialDesign])
    .controller('characters', characters)
    .name;
