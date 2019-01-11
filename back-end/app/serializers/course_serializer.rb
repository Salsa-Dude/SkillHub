class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :bio, :instructor_id, :city, :state, :address
  belongs_to :instructor, class_name: "User"
  has_many :course_sessions
  has_many :reviews, through: :course_sessions
  # has_many :students, through: :course_sessions
end
