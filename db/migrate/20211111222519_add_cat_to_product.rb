class AddCatToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :cat, :string
  end
end
