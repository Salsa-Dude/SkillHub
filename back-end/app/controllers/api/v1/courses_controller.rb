class Api::V1::CoursesController < ApplicationController

  def index 
    @courses = Course.all
    render json: @courses
  end

  def show 
    @course = Course.all.find(params[:id])
    render json: @course
  end

  def update
    @course = Course.find(params[:id]).update(course_params)
    render json: @course
  end

  private

  def course_params
    params.require(:course).permit(:id, :name, :description, :image, :bio, :instructor_id, :city, :address)
  end
end
