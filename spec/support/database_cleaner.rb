# frozen_string_literal: true

RSpec.configure do |config|
  config.use_transactional_fixtures = false

  KEEP_TABLES = %w[].freeze

  config.before(:suite) do
    DatabaseCleaner[:sequel].strategy = :transaction
    DatabaseCleaner[:sequel].clean_with(:truncation, except: KEEP_TABLES)
  end

  config.around(:each) do |example|
    DatabaseCleaner[:sequel].cleaning do
      example.run
    end
  end
end