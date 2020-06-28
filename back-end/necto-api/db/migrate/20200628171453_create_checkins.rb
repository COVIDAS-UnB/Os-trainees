class CreateCheckins < ActiveRecord::Migration[6.0]
  def change
    create_table :checkins do |t|
      t.string :date
      t.string :hour

      t.timestamps
    end
  end
end
