routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
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
}