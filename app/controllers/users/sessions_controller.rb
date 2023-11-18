class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    resource = warden.authenticate(auth_options)
    
    if resource
      render json: { status: 'success', message: 'Login successful', data: resource.email }
    else
      render json: { status: 'error', message: 'Invalid email or password' }
    end
  end

  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    render json: { status: 'success', message: 'Logout successful' } if signed_out
  end
end
