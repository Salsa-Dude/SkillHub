class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :student_id, :course_session_id
  belongs_to :course_session
  belongs_to :student, class_name: "User"
end
