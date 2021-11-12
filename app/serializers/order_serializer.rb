class OrderSerializer < ActiveModel::Serializer
  attributes :id, :select, :product, :created_at
  has_one :user
  has_one :product
end
