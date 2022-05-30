class UserSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :username, :password
  has_many :reviews
end
