class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string  :title
      t.integer :rating
      t.string :body, null: false, limit: 300
      t.integer :user_id
      t.integer :hike_id
      
      t.timestamps
    end
  end
end
