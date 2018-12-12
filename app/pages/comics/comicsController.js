import angular from 'angular';
import materialDesign from '../../config/material';
import { MDCDialog } from '@material/dialog';
import searchService from '../../common/service/service'


function comics($scope, $log, searchService) {
    let dialog;

    $scope.openDetail = openDetail;
    $scope.callFilter = callFilter;

    setTimeout(function () {
        dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    }, 800);
    
    function openDetail(title, text) {
        console.log("test" , title)
        $scope.dialogText = {
            'title': title ,
            'detail': text
        };
        dialog.open();
    };
    
    function callFilter(term) {
        $scope.filterValue = term;
    };

    searchService.getSearch('comics').then(data => {
        $scope.dataComics =  data.data.results;
    });
    
}

export default comics
