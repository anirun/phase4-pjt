class ChangeUsers < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.remove :name
      t.string :username
    end
  end
end
