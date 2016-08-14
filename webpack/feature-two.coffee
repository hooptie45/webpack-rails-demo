app = angular.module( "featureTwo", [
  "app.config"
]);

require "./feature-two/controllers/feature-two-controller"

app.config(["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider)->
  $routeProvider.when "/feature/two",
    controller: "FeatureTwoController"
    templateUrl: "templates/foo/two.html.haml"
  $routeProvider.otherwise
    redirectTo: "/feature/two"

]);

