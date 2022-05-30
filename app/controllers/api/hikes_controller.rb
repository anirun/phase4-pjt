class Api::HikesController < ApplicationController
  
  def index
    render json: Hike.all
  end

  def create
    hike = @current_user.Hike.create!(hike_params)
    render json: hike, status: :created
  end

  private

  def hike_params
    params.permit(:name, :location, :minutes_to_complete)
  end

end
