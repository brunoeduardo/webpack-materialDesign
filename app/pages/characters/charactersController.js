import angular from 'angular';
import materialDesign from '../../config/material';
import { MDCDialog } from '@material/dialog';

function characters($scope) {
    let dialog;

    $scope.openDetail = openDetail;
    $scope.callSearch = callSearch;

    setTimeout(function () {
        dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    }, 1000);
    
    function openDetail(title, text) {
        $scope.dialogText = {
            'title': title ,
            'detail': text
        };
        dialog.open();
    };

    function callSearch (term) {
        console.log("Start search", term);
        //call api here
    };
    
}

export default angular.module('controller.characters', [materialDesign])
    .controller('characters', characters)
    .name;
