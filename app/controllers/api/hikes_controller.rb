class Api::HikesController < ApplicationController
  
  def index
    render json: Hike.all
  end

  def create
    hike = @current_user.hikes.create!(hike_params)
    render json: hike, status: :created
  end

  def show
    hike = Hike.find(params[:id])
    render json: hike, include: :reviews
end

  private

  def hike_params
    params.permit(:name, :location, :minutes_to_complete)
  end

end
