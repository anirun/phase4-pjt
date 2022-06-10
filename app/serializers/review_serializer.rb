class ReviewSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :rating, :body, :created_at
  belongs_to :hike, serializer: HikeSerializer
  belongs_to :user, serializer: UserSerializer


end
