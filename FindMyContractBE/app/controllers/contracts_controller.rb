class ContractsController < ApplicationController
    def index 
    @contracts = Contract.all
    render json: @contracts
    end 
    def show 
        @contract = contract.find(params[:id])
        render json:@contract
    end 
end
