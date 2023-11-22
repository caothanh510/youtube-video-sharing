class CreateNotifications < ActiveRecord::Migration[7.1]
  def change
    create_table :notifications do |t|
      t.integer :created_by_id, null: false
      t.text :message, null: false
      t.timestamps
    end
  end
end
