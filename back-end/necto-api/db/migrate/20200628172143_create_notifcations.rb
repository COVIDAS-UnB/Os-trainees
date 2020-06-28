class CreateNotifcations < ActiveRecord::Migration[6.0]
  def change
    create_table :notifcations do |t|
      t.string :notification_type

      t.timestamps
    end
  end
end
