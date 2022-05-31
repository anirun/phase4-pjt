class Hike < ApplicationRecord
  has_many :reviews # 17 methods comments, comments=
  validates :name, :location, :minutes_to_complete, presence: true
  
end
  