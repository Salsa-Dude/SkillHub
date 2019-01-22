class Api::V1::MessagesController < ApplicationController
  
  def index 
    @messages = Message.all
    render json: @messages
  end

  def create
    @message = Message.create(message_params)
    render json: @message
  end

  def destroy
    render json: Message.find(params[:id]).destroy
  end

  private 

  def message_params
    params.require(:message).permit(:content, :sender_id, :recipient_id)
  end


end
