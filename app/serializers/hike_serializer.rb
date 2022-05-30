class HikeSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer  
  attributes :id, :name, :location, :minutes_to_complete

  attribute :reviews do |object|
    ReviewSerializer.new(object.reviews)
  end

end
  