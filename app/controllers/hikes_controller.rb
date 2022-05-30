class HikesController < ApplicationController

    def index
        @hikes = Hike.all
        render json: @hikes, status: 200
    end

    def show
        find_hike
    end

    private

    def find_hike
        @hike = Hike.find_by_id(params[:id])
    end

end