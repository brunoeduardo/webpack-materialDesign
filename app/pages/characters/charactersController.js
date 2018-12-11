import angular from 'angular';
import materialDesign from '../../config/material';
import { MDCDialog } from '@material/dialog';
import searchService from '../../common/service/service'


function characters($scope, $log, searchService) {
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


    searchService.getSearchCharacter().then(data => {
        $log.log("Characters =>", data);
        $scope.dataCharacters =  data.data.results;
    });
    
}

// export default angular.module('controller.characters', [materialDesign, searchService])
//     .controller('characters', characters)
//     .name;

export default characters
