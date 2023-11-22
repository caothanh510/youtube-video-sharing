class ApplicationController < ActionController::Base
  include Pagy::Backend

  def refresh_csrf
    render json: { csrf_token: form_authenticity_token }, status: :ok
  end
end
