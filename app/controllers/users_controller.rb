class UserController < ApplicationController

    def new
        @user = User.new
    end

    def create
        @user = User.create(signup_params)
        # if @user.id
        #     session[:user_id] = @user.id
        #     redirect_to @user
        # else
        #     render :new
        # end
    end

    private

    def signup_params
        params.require(:user).permit(:username, :password)
    end


end