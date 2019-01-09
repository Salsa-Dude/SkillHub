class User < ApplicationRecord
  
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id" 
  has_many :recieved_messages, class_name: "Message", foreign_key: "recipient_id" 

  has_many :reviews, foreign_key: "student_id"
  
  has_many :courses, foreign_key: "instructor_id"
  
  has_many :course_sessions, through: :courses
  has_many :class_sessions, class_name: "CourseSession", foreign_key: "student_id"
end
