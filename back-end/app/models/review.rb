class Review < ApplicationRecord
  belongs_to :course_session
  belongs_to :student, class_name: "User"
end
