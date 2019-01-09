class CreateCourseSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :course_sessions do |t|
      t.datetime :checkin, null: false
      t.datetime :checkout, null: false

      t.integer :student_id
      t.integer :course_id
      t.timestamps
    end
  end
end
