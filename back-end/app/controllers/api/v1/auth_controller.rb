class Api::V1::AuthController < ApplicationController
  # POST /api/v1/login
  def create 
    @user = User.find_by(email: params[:email])
    if @user and @user.authenticate(params[:password])
      render json: {message: "Correct username and password"}
    else 
      render json: {message: "Incorrect! Are U a H3CKER?"}
    end
  end

end
