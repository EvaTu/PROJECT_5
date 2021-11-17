class Api::ProductsController < ApplicationController
    

    def index
        products = Product.all    
        render json: products
    end

    def show 
        @product = Product.find(params[:id])
        render json: @product, status: :ok
    end

    def create
        @new_product = Product.new(product_params)
        # @current_user.admin = true
        if @new_product.save
            render json: @new_product, status: :created
        else
            render json: @new_product.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def product_params
        params.permit(:name, :image, :price, :color, :inventory, :description, :cat)
    end
end
