import angular from 'angular';
import route from 'angular-route';

//config
import routes from './config/app.route';

//material design

//controllers

//directives
import card from './common/directives/card/card'
import search from './common/directives/search/search'

const marvelModule = angular.module('marvelApp', [route, card, search])
    .config(routes)
    .name





