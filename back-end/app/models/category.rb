class Category < ApplicationRecord
  has_many :course_category
  has_many :courses, through: :course_category

  def self.getDanceCategory 
    dances = self.all.find {|category| category.name === "Dancing"}
  end

  def self.getLanguageCategory
    languages = self.all.find {|category| category.name === "Languages"}
  end

  def self.getMusicalCategory
    musicals = self.all.find {|category| category.name === "Musical"}
  end
end
