class CourseSession < ApplicationRecord
  belongs_to :course
  belongs_to :student, class_name: "User"
  has_one :review
end
