class Api::V1::AuthController < ApplicationController
  # POST /api/v1/login
  def create 
    @user = User.find_by(email: params[:email])
    if @user and @user.authenticate(params[:password])
      render json: {
        message: "Correct username and password",
        user_info: @user,
        error: false,
        token: encode({user_id: @user.id})
      }, status: :accepted
    else 
      render json: {
        message: "Incorrect! Are U a H3CKER?",
        error: true
      }, status: :unauthorized
    end
  end

end
