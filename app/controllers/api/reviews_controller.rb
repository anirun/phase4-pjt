class Api::ReviewsController < ApplicationController
  
    def index
      if params[:hike_id]
        hike = Hike.find(params[:hike_id])
        reviews = hike.reviews
      else
        reviews = Review.all
      end
      render json: reviews, include: [:hike, :user]
    end
  
    def create
      review = Review.create!(review_params)
      render json: review, status: :created
    end
  
    def show
      review = Review.find_by_id(params[:id])
      render json: review, include: [:hike, :users]
    end

    def destroy
      review = Review.find_by_id(params[:id])
      review.destroy
    end
      
    def update
      review = Review.find_by_id(params[:id])

    end
  
    private
  
    def review_params
      params.permit(:title, :rating, :body, :user, :hike)
    end
  
  end
  