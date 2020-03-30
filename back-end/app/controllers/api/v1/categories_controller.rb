class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def danceCategory
    @dance = Category.getDanceCategory
    render json: @dance
  end

  def languageCategory
    @languages = Category.getLanguageCategory
    render json: @languages
  end

  def musicalCategory
    @musicals = Category.getMusicalCategory
    render json: @musicals
  end

  def carpentryCategory
    @carpentry = Category.getCarpentryCategory
    render json: @carpentry
  end

  def artCategory
    @art = Category.getArtCategory
    render json: @art 
  end

end
