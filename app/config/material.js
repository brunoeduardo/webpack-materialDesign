
//import {MDCRipple} from '@material/ripple';
//import {MDCTextField} from '@material/textfield';

export default function materialDesign() {
    setTimeout(function () {
        let mdc = {
            'ripple': require('@material/ripple'),
            'textfld': require('@material/textfield')
        },
        buttonsElements = document.getElementsByClassName('mdc-button'),
        textFldElements = document.getElementsByClassName('mdc-text-field'),
        i;

        for (i = 0; i < buttonsElements.length; i++) {
            mdc.ripple.MDCRipple.attachTo(buttonsElements[i]);
        };
  
        for (i = 0; i < textFldElements.length; i++) {
            mdc.textfld.MDCTextField.attachTo(textFldElements[i]);
        };
    }, 1000);
}