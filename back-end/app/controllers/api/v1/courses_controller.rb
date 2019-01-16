class Api::V1::CoursesController < ApplicationController

  def index 
    @courses = Course.all
    render json: @courses
  end

  def show 
    @course = Course.all.find(params[:id])
    render json: @course
  end
end
