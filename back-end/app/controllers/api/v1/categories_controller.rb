class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def danceCategory
    @dance = Category.danceCategory
    render json: @dance
  end

end
