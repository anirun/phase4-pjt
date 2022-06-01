class ReviewSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :rating, :body, :created_at
  belongs_to :hike, serializer: HikeSerializer

  # attribute :rating do |object|
  #   "Rating is #{object.rating}/5"
  # end

end
