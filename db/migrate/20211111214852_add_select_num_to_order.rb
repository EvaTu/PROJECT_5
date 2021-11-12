class AddSelectNumToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :select, :integer
  end
end
