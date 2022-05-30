class HikeSerializer < ActiveModel::Serializer
    attributes :id, :name, :location, :minutes_to_complete
  end
  