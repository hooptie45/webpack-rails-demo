expect = require "expect.js"

require "../../webpack/required"
require "../../webpack/feature-one"
require "angular-mocks"

featureContext = require.context("../../webpack", false);

for feature in featureContext.keys()
  featureContext(feature)

testContext = require.context(".", true, /spec/);
for test in testContext.keys()
  testContext(test)
