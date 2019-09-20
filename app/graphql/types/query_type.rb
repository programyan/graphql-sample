# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :requests,
          [Types::RequestType],
          null: false,
          description: 'Returns a list of items in the martian library'

    def requests
      Request.all
    end
  end
end
