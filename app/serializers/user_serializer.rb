class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin

  has_many :orders
  # has_many :products
end
