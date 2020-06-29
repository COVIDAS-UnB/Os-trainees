class RemoveDateFromCheckin < ActiveRecord::Migration[6.0]
  def change
    remove_column :checkins, :date, :string
  end
end
