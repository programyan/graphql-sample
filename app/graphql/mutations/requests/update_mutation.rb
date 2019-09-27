# frozen_string_literal: true

module Mutations
  module Requests
    class UpdateMutation < ::Mutations::BaseMutation
      argument :id, String, required: true
      argument :description, String, required: false
      argument :details, String, required: false
      argument :email, type: String, required: false

      type Types::RequestType

      def resolve(id:, email:, **attributes)
        request = Request.eager(:user).with_pk(id)
        request.user.update(email: email) if email
        request.update(attributes)
        MainSchema.subscriptions.trigger("updateRequest", {}, request.to_hash.tap { |res| res[:user] = request.user.to_hash })
        request
      end
    end
  end
end
