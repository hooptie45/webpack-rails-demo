require File.expand_path('../boot', __FILE__)

require "rails"
# Pick the frameworks you want:
require "action_controller/railtie"
require "action_view/railtie"

Bundler.require(*Rails.groups)

module WebpackRailsDemo
  class Application < Rails::Application
  end
end
