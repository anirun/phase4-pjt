class CreateHikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikes do |t|
      t.string :name
      t.string :location
      t.integer :minutes_to_complete

      t.timestamps
    end
  end
end
