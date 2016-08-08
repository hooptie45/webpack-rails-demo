describe "Feature: two", ->
  beforeEach angular.mock.module "featureTwo"

  it "will pass", inject ($log, $rootScope, $compile)->

    $rootScope.data = foo: "bar"

    html = '''
      <pre>{{data|json}}</pre>
    '''
    html = $compile($(html))($rootScope)

    $rootScope.$digest()

    expect(html.text()).to.match /"foo": "bar"/
