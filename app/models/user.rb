class User < ApplicationRecord
  has_many :hikes
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
end
