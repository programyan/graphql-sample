# frozen_string_literal: true

FactoryBot.define do
  factory :request do
    id { SecureRandom.uuid }
    description { Faker::Lorem.sentence }
    details { Faker::Lorem.sentences }
    user
  end
end
