# Add additional requires below this line. Rails is not loaded until this point!
require File.expand_path("../config/environment", __dir__)
require 'rspec/rails'
require 'factory_bot_rails'
require 'database_cleaner'
require 'shoulda/matchers'
# ...

RSpec.configure do |config|
  # Include FactoryBot methods
  config.include FactoryBot::Syntax::Methods

  config.include Devise::Test::ControllerHelpers, type: :controller

  # Configure RSpec to run in documentation mode for more verbose output
  config.formatter = :documentation

  # Include Routes helpers
  config.include Rails.application.routes.url_helpers

  # DatabaseCleaner configuration
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
