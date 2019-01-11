class Api::V1::CourseSessionsController < ApplicationController
  def index 
    @course_sessions = CourseSession.all 
    render json: @course_sessions
  end
end
