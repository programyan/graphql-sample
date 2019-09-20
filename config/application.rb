require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'sequel'
require 'active_model/railtie'
# require 'active_job/railtie'
# require 'active_record/railtie'
# require 'active_storage/engine'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'action_cable/engine'
require 'sprockets/railtie'
# require 'rails/test_unit/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MartianLibrary
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Don't generate system test files.
    config.generators do |g|
      g.test_framework  false
      g.stylesheets     false
      g.javascripts     false
      g.helper          false
      g.channel         assets: false
      g.system_tests    false
    end

    config.sequel.after_connect = proc do
      Sequel.application_timezone = :local
      Sequel.database_timezone = :utc
      Sequel.extension :core_extensions
      Sequel.extension :pg_json_ops
      Sequel.extension :pg_array_ops
      Sequel::Model.db.extension :pg_array
      Sequel::Model.db.extension :null_dataset
      Sequel::Model.plugin :timestamps, update_on_create: true
      Sequel::Model.plugin :validation_helpers
      Sequel::Model.plugin :active_model
      Sequel::Model.require_valid_table = false
    end
  end
end
