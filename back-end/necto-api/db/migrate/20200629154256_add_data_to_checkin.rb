class AddDataToCheckin < ActiveRecord::Migration[6.0]
  def change
    add_column :checkins, :date_created, :date
  end
end
