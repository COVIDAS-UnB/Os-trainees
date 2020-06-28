class AddHealthToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :health, null: false, foreign_key: true
  end
end
