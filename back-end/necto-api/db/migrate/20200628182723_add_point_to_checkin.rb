class AddPointToCheckin < ActiveRecord::Migration[6.0]
  def change
    add_reference :checkins, :point, null: false, foreign_key: true
  end
end
