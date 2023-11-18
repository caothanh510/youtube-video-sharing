class ApplicationController < ActionController::Base
  def refresh_csrf
    render json: { csrf_token: form_authenticity_token }, status: :ok
  end
end
