class Api::ReviewsController < ApplicationController
  
    def index
      render json: Review.all
    end
  
    def create
      review = Review.create!(review_params)
      render json: review, status: :created
    end
  
    def show
      review = Review.find_by_id(params[:id])
      render json: review, include: [:hike, :user]
    end

    def destroy
      review = Review.find_by_id(params[:id])
      review.destroy
    end
      
  
    private
  
    def review_params
      params.permit(:title, :rating, :body, :user, :hike)
    end
  
  end
  