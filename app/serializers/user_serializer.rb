class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password, :password_confirmation, :admin

  has_many :orders
  # has_many :products
end
