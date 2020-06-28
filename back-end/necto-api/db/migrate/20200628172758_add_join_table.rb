class AddJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :notifications do |t|
      # t.index [:user_id, :notification_id]
      # t.index [:notification_id, :user_id]
    end
  end
end
