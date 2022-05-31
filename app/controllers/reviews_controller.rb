class ReviewsController < ApplicationController
    before_action :find_hike

    def index # get "hikes/:hike_id/reviews" or get "/reviews"
        reviews = Review.all
        render json: reviews, include: :hike
        # render json: ReviewSerializer.new(Review.all).serializable_hash
    end

    def show # get reviews/:id
        render json: serialized_review
    end

    private

    def find_review
        review = Review.find_by_id(params[:id])
    end

    def serialized_review
        review.to_json(include: :hike)
    end


end
