class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :rating
      t.integer :student_id
      t.integer :course_session_id
      t.timestamps
    end
  end
end
