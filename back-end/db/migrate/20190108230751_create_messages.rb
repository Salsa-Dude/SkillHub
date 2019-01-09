class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :subject
      t.string :content
      t.column :status, :integer, default: 0
      t.integer :sender_id
      t.integer :recipient_id
      t.timestamps
    end
  end
end
