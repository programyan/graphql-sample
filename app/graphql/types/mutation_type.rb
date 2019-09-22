# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :update_request, mutation: Mutations::Requests::UpdateMutation
  end
end
