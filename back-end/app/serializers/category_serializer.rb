class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :courses, through: :course_category
end
