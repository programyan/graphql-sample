# frozen_string_literal: true

class GraphqlController < ApplicationController
  def execute
    result = Graphql::ExecutionQueryService.call(params)
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?

    handle_error_in_development e
  end

  private

  def handle_error_in_development(exception)
    logger.error exception.message
    logger.error exception.backtrace.join("\n")

    render json: { error: { message: exception.message, backtrace: exception.backtrace }, data: {} }, status: 500
  end
end
