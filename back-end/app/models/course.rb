class Course < ApplicationRecord
  belongs_to :instructor, class_name: "User"
  has_many :students, class_name: "User", through: :course_sessions
  has_many :course_sessions
  has_many :reviews, through: :course_sessions
  has_many :categories, through: :course_category
end
