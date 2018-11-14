
var angular = require('angular');
var ngModule = angular.module('marvelApp', []);


import {MDCRipple} from '@material/ripple';
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));