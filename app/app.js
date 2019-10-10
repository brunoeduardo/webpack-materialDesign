import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

//config
import routes from './config/app.route';

//material design

//controllers
import characters from './pages/characters/charactersController'
import comics from './pages/comics/comicsController'

//directives
import card from './common/directives/card/card'
//import search from './common/directives/search/search'
import filter from './common/directives/filter/filter'

//services
import searchService from './common/service/service'

//provider
import utils from './common/provider/utils'

const marvelModule = angular.module('marvelApp', [ngRoute, ngResource, card, filter])
    .config(routes)
    .provider('utils', utils)
    .service('searchService', searchService)
    .controller('characters', characters)
    .controller('comics', comics)
    .name

