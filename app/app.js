import angular from 'angular';
import route from 'angular-route';

//config
import routes from './config/app.route';

//material design
import  './config/material';

//controllers

//directives
import directivesModules from './common/directives/directivesModule';


const marvelModule = angular.module('marvelApp', [route, directivesModules])
    .config(routes)




