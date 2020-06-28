class AddUserToCheckin < ActiveRecord::Migration[6.0]
  def change
    add_reference :checkins, :user, null: false, foreign_key: true
  end
end
