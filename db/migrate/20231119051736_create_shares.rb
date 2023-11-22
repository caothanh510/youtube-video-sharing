class CreateShares < ActiveRecord::Migration[7.1]
  def change
    create_table :shares do |t|
      t.integer :user_id, null: false
      t.jsonb :additional_data, default: {}
      t.string :url, null: false
      t.timestamps
    end
  end
end
