import angular from 'angular';
import route from 'angular-route';

//config
import routes from './config/app.route';

//material design
import  './config/material';

//controllers

//directives
import card from './common/directives/card/card.js';


const marvelModule = angular.module('marvelApp', [route])
    .config(routes);


