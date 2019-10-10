import angular from 'angular';
import materialDesign from '../../config/material';
import { MDCDialog } from '@material/dialog';
import searchService from '../../common/service/service'


function characters($scope, $log, searchService) {
    let dialog;

    $scope.openDetail = openDetail;
    $scope.callFilter = callFilter;

    setTimeout(function () {
        dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    }, 800);
    
    function openDetail(title, text) {
        $scope.dialogText = {
            'title': title ,
            'detail': text
        };
        dialog.open();
    };

    function callFilter(term) {
        $scope.filterValue = term;
    };

    searchService.getSearch('characters').then(data => {
        $scope.dataCharacters =  data.data.results;
    });
    
}

export default characters
