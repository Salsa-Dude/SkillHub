class Api::V1::CourseSessionsController < ApplicationController
  def index 
    @course_sessions = CourseSession.all 
    render json: @course_sessions
  end

  def create 
    @course_session = CourseSession.create(course_session_params)
    render json: @course_session
  end

  private

  def course_session_params
    params.require(:course_session).permit(:checkin, :checkout, :course_id, :student_id)
  end

 
end
