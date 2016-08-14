app = angular.module( "featureOne", [
  "app.config"
]);

require "./feature-one/controllers/feature-one-controller"

app.config(["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider)->
  $routeProvider.when "/feature/one",
    controller: "FeatureOneController"
    templateUrl: "templates/foo/one.html.haml"

  $routeProvider.otherwise
    redirectTo: "/feature/one"

]);

