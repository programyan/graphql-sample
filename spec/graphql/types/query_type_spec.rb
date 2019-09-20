# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Types::QueryType do
  describe 'items' do
    subject(:result) do
      MartianLibrarySchema.execute(query).as_json
    end

    let!(:requests) { create_pair(:request) }

    let(:query) do
      %(query {
        requests {
          description
        }
      })
    end

    it 'returns all requests' do
      expect(result.dig('data', 'requests')).to match_array(
        requests.map { |request| { 'description' => request.description } },
      )
    end
  end
end
