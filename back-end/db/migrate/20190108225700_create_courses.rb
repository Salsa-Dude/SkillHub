class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.column :level, :integer, default: 0
      t.string :name
      t.string :description
      t.string :image
      t.string :bio
      t.integer :instructor_id
      t.string :city
      t.string :address
      t.integer :hourly
      t.timestamps
    end
  end
end
