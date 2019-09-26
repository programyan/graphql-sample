module Types
  class SubscriptionType < BaseObject
    field :updateRequest, Types::RequestType, null: false, description: ''

    def update_request; end
  end
end