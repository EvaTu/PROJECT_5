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
        @new_order = Order.new(order_params)
        @new_order.user = @current_user
        if @new_order.save
            render json: @new_order, status: :created
        else
            render json: @new_order.errors.full_messages, status: :unprocessable_entity
        end
    end

    private 
    
    def order_params
        params.permit(:select)
    end


end
