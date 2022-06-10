class Api::HikesController < ApplicationController
  
  def index
    render json: Hike.all
  end

  def order_by_name
    render json: Hike.order_by_name
  end

  def create
    hike = Hike.create!(hike_params)
    render json: hike, status: :created
  end

  def show
    hike = Hike.find(params[:id])
    render json: hike
  end

  private

  def hike_params
    params.permit(:name, :location, :minutes_to_complete, :description)
  end

end
