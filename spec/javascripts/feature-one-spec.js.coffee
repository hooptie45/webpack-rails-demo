describe "Feature: One", ->
  beforeEach angular.mock.module "featureOne"

  it "will pass", inject ($log, $rootScope, $compile, $location)->
    html = '''
      <div ng-view></div>
    '''
    html = $compile($(html))($rootScope)
    $rootScope.$digest()

    expect($location.url()).to.be "/feature/one"
