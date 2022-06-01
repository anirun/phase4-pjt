class User < ApplicationRecord
  has_secure_password #validates password presence
  has_many :reviews, dependent: :destroy
  has_many :reviewed_hikes, through: :reviews, source: :hike
  validates :username, presence: true, uniqueness: true
  validates :password, length: {in: 4..30}

end
