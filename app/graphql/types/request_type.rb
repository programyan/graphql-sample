# frozen_string_literal: true

module Types
  class RequestType < Types::BaseObject
    field :id, ID, null: false
    field :description, String, null: false
    field :details, String, null: true
    field :user, Types::UserType, null: false
  end
end
