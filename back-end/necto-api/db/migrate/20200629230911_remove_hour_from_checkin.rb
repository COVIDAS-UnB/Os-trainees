class RemoveHourFromCheckin < ActiveRecord::Migration[6.0]
  def change
    remove_column :checkins, :hour, :time
  end
end
