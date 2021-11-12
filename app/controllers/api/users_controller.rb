class Api::UsersController < ApplicationController
    def index
        users = User.all    
        render json: users
    end

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: { error: 'No active session' }, status: :unauthorized
        end
    end

    def create 
        @new_user = User.create!(user_params)
        session[:user_id] = @new_user.id
        render json: @new_user,
        status: :created
    end 

    private 

    def user_params 
        params.permit(:first_name, :last_name, :password, :password_confirmation, :email)
    end 
end
