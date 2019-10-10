export default function materialDesign() {
    setTimeout(function () {
        let mdc = {
            'ripple': require('@material/ripple'),
            'textfld': require('@material/textfield'),
            'dialog': require('@material/dialog')
        },
            buttonsElements = document.getElementsByClassName('mdc-button'),
            textFldElements = document.getElementsByClassName('mdc-text-field'),
            dialogElements = document.getElementsByClassName('mdc-dialog'),
            i;

        for (i = 0; i < buttonsElements.length; i++) {
            mdc.ripple.MDCRipple.attachTo(buttonsElements[i]);
        };

        for (i = 0; i < textFldElements.length; i++) {
            mdc.textfld.MDCTextField.attachTo(textFldElements[i]);
        };

        for (i = 0; i < dialogElements.length; i++) {
            mdc.dialog.MDCDialog.attachTo(dialogElements[i]);
        };
    }, 1000);
}

