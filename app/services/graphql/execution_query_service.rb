# frozen_string_literal: true

module Graphql
  class ExecutionQueryService
    def self.call(data, context: {})
      variables = ensure_hash(data[:variables])
      query = data[:query]
      operation_name = data[:operationName]

      MainSchema.execute(
        query,
        variables: variables,
        context: context,
        operation_name: operation_name,
      )
    end

    private

    def self.ensure_hash(ambiguous_param)
      case ambiguous_param
      when String
        if ambiguous_param.present?
          ensure_hash(JSON.parse(ambiguous_param))
        else
          {}
        end
      when Hash, ActionController::Parameters
        ambiguous_param
      when nil
        {}
      else
        raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
      end
    end
  end
end
