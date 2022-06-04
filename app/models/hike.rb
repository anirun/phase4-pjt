class Hike < ApplicationRecord
  has_many :reviews # 17 methods comments, comments=
  has_many :users, through: :reviews
  validates :name, :location, :minutes_to_complete, :description, presence: true
  
end