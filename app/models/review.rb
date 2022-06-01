class Review < ApplicationRecord
    belongs_to :hike
    belongs_to :user
    validates :rating, presence: true, numericality: {less_than_or_equal_to: 5, greater_than_or_equal_to: 1}
    validates :body, presence: true, length: {in: 2..300}
end
