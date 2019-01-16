class CreateCourseCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :course_categories do |t|
      t.integer :course_id
      t.integer :category_id
      t.timestamps
    end
  end
end
