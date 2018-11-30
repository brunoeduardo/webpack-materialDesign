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


    https://developer.marvel.com/docs#!/public/getComicsCollection_get_6

    http://gateway.marvel.com/v1/public/characters?ts=1&apikey=47fbbb8ce97fc46360c96f01d5179835&hash=74a5d628d3e86d97d2f3ebfbf02b2ebd

    Your public key
    47fbbb8ce97fc46360c96f01d5179835
    Your private key
    3bf5a08c7453a44a3f164719299a9143d5abb003
    hash
    74a5d628d3e86d97d2f3ebfbf02b2ebd