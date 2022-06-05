class Api::HikesController < ApplicationController
  
  def index
    render json: Hike.all
  end

  def create
    hike = Hike.create!(hike_params)
    render json: hike, status: :created
  end

  def show
    hike = Hike.find(params[:id])
    render json: hike, include: [:reviews, :users]
end

  private

  def hike_params
    params.permit(:name, :location, :minutes_to_complete, :description)
  end

end
