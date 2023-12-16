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
    if @share.valid?
      NotificationJob.perform_later(current_user.id) if create_resource
      render json: { status: 'success', message: 'Shared successful', data: @share }
    else
      render json: { status: 'error', message: @share.errors.full_messages.join(', ') }
    end
  end

  private

  def build_share
    @share ||= Share.new(share_params.merge(user: current_user))
  end

  def create_resource 
    @share.additional_data = build_additional_data
    @share.save
  end

  def build_additional_data
    additional_data = YoutubeVideoService.new(url: share_params[:url]).perform
    additional_data['shared_by'] = current_user.email
    additional_data
  end
   
  def share_params
    params.require(:share).permit(:url)
  end
end
