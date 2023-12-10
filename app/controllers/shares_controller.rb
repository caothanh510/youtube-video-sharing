require 'net/http'
require 'uri'

class SharesController < ApplicationController
  before_action :build_share, only: :create

  # GET /shares
  def index
    @pagy, @records = pagy(Share.order(created_at: :desc), page: params[:page] || 1)
    
    render json: { status: 'success', data: { pagy: @pagy, records: @records } }
  end

  # POST /shares
  def create
    if @share.valid? && @share.save
      NotificationJob.perform_later(current_user.id)
      render json: { status: 'success', message: 'Shared successful', data: @share }
    else
      render json: { status: 'error', message: @share.errors.full_messages.join(', ') }
    end
  end

  private

  def build_share
    share_attributes = share_params.merge(
      user: current_user,
      additional_data: build_additional_data
    )
  
    @share ||= Share.new(share_attributes).tap do |share|
      share.additional_data['shared_by'] = current_user.email
    end
  end

  def build_additional_data
    additional_data = YoutubeVideoService.new(url: share_params[:url]).perform
    additional_data
  end
   
  def share_params
    params.require(:share).permit(:url)
  end
end
