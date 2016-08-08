app = angular.module "featureOne"

class Feature
  constructor: (@inject)->

app.service "feature", [
  "$injector"
  Feature
]
