class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  # has_many :course_category
  has_many :courses, through: :course_category
end
