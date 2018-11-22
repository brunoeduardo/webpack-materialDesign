import angular from 'angular';
import route from 'angular-route';

import route from 'angular-route';

require('common/directives/card/card');

var marvelModule = angular.module('marvelApp', [route]);

marvelModule.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home/home.html"
    })
    .when("/comics", {
        templateUrl : "pages/comics/comics.html"
    })
    .when("/characters", {
        templateUrl : "pages/characters/characters.html"
    })
});

import {MDCRipple} from '@material/ripple';
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));