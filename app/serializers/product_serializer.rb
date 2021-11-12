class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :cat, :image, :price, :color, :inventory, :description
end
