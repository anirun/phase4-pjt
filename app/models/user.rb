class User < ApplicationRecord
  has_secure_password
  has_many :reviews, dependent: :destroy
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: {in: 4..30}

end
