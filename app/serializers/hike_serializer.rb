class HikeSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :users
  attributes :id, :name, :location, :minutes_to_complete, :description, :reviews

  # attribute :reviews do |object|
  #   ReviewSerializer.new(object.reviews)
  # end

end
  