class Category < ApplicationRecord
  has_many :courses, through: :course_category
end
