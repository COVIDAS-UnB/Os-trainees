class AddShowToNotifcation < ActiveRecord::Migration[6.0]
  def change
    add_column :notifcations, :show, :boolean
  end
end
