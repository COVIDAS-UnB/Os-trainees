class AddShowToNotification < ActiveRecord::Migration[6.0]
  def change
    add_column :notifications, :show, :boolean
  end
end
