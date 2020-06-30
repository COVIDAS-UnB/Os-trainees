class AddHourToCheckin < ActiveRecord::Migration[6.0]
  def change
    add_column :checkins, :hour, :float
  end
end
