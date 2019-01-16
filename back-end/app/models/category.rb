class Category < ApplicationRecord
  has_many :course_category
  has_many :courses, through: :course_category
end
