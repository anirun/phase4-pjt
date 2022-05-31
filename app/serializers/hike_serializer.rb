class HikeSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :location, :minutes_to_complete#, reviews

  # attribute :reviews do |object|
  #   ReviewSerializer.new(object.reviews)
  # end

end
  