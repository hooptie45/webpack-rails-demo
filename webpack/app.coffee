app = angular.module "app", [
  "app.config"
]

app.config(["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider)->
  $routeProvider.when "/app/home",
    templateUrl: "templates/app.html.haml"

  $routeProvider.otherwise
    redirectTo: "/app/home"

]);

