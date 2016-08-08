app = angular.module "app.config", [
  "ngResource"
  "ngRoute"
]

app.config(["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider)->
  $locationProvider.hashPrefix("!")
  $locationProvider.html5Mode(false)
]);

