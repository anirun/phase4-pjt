class ReviewSerializer < ActiveModel::Serializer
  include jSONAPI::Serializer
  attributes :id, :title, :rating, :body, :user_id, :hike_id
  belongs_to :hike, serializer: HikeSerializer
  belongs_to :user, serializer: UserSerializer

  attribute :rating do |object|
    "Rating is #{object.rating}/5"
  end

end
