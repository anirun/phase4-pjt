class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :password, :reviewed_hikes
  has_many :reviews
  
  def reviewed_hikes
    self.object.reviewed_hikes.map{|hike| {hike:hike, users:hike.users}}
  end

end
