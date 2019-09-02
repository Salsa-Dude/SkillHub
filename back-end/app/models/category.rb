class Category < ApplicationRecord
  has_many :course_category
  has_many :courses, through: :course_category

  def self.danceCategory 
    test = self.all.find {|category| category.name === "Dancing"}
  end
end
