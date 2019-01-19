class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :bio, :instructor_id, :city, :address
  belongs_to :instructor, class_name: "User"
  has_many :course_sessions
  has_many :reviews, through: :course_sessions
  has_many :categories, through: :course_category
  has_many :students, class_name: "User", through: :course_sessions
 
end
