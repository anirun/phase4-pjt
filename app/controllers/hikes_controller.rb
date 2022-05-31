class HikesController < ApplicationController
    # before_action :find_hike, only [:show, :update, :destroy]

    def index
        @hikes = Hike.all
        render json: hikes, include: :reviews
        # render json: HikeSerializer.new(Hike.preload(:reviews)).serializable_hash
    end

    def show
        byebug
        @hike = Hike.find_by(id: params[:id])
        render json: @hike, include: :reviews
    end

    private

    # def find_hike
    #     @hike = Hike.find_by_id(params[:id])
    #     render json: @hike, include: :reviews
    # end

    # def serialized_hike
    #     @hike.to_json(include: :reviews)
    # end

end