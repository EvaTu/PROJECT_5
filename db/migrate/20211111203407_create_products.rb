class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :type
      t.string :image
      t.integer :price
      t.string :color
      t.integer :inventory
      t.string :description

      t.timestamps
    end
  end
end
