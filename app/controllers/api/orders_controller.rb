class Api::OrdersController < ApplicationController
    def index
        orders = Order.all    
        render json: orders
    end

    def show 
        @order = Order.find(params[:id])
        render json: @order, status: :ok
    end

    def create
        # byebug
        @new_order = current_user.orders.build(order_params)
        # byebug
        if @new_order.save
            render json: @new_order, status: :created
        else
            render json: @new_order.errors, status: :unprocessable_entity
        end
    end

    private 
    
    def order_params
        params[:order].permit(:user_id, :product_id, :select)
    end


end
