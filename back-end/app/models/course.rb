class Course < ApplicationRecord
  enum level: [:allLevels, :beginner, :intermediate]
  belongs_to :instructor, class_name: "User"
  has_many :course_sessions, dependent: :destroy
  has_many :students, class_name: "User", through: :course_sessions
  
  has_many :reviews, through: :course_sessions
  has_many :course_category
  has_many :categories, through: :course_category
end
