class CourseSessionSerializer < ActiveModel::Serializer
  attributes :id, :checkin, :checkout, :student_id, :course_id
  belongs_to :course
  belongs_to :student, class_name: "User"
  has_one :review
end
