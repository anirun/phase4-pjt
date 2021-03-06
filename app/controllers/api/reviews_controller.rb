class Api::ReviewsController < ApplicationController
  
    def index
      if params[:hike_id]
        hike = Hike.find(params[:hike_id])
        reviews = hike.reviews
      else
        reviews = Review.all
      end
      render json: reviews
    end
  
    def create
      review = @current_user.reviews.create!(review_params)
      render json: review, status: :created
    end
  
    def show
      review = Review.find(params[:id])
      render json: review
    end

    def destroy
      review = Review.find(params[:id])
      review.destroy
    end
      
    def update
      review = Review.find(params[:id])
      review.update!(review_params)
      render json: review, status: :ok
    end
  
    private
  
    def review_params
      params.permit(:title, :rating, :body, :user_id, :hike_id, :id)
    end
  
  end
  