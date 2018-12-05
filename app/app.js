import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

//config
import routes from './config/app.route';

//material design

//controllers
import characters from './pages/characters/charactersController'

//directives
import card from './common/directives/card/card'
import search from './common/directives/search/search'


const marvelModule = angular.module('marvelApp', [ngRoute, ngResource, card, search, characters])
    .config(routes)
    .name

