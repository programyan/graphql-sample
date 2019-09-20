# frozen_string_literal: true

class Request < Sequel::Model
  unrestrict_primary_key
  
  many_to_one :user
end
