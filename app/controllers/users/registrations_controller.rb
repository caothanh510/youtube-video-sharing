class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json 

  def create
    build_resource(sign_up_params)

    if resource.save
      render json: { status: 'success', message: 'Registration successful' }
    else
      clean_up_passwords resource
      set_minimum_password_length
      render json: { status: 'error', message: resource.errors.full_messages.join(', ') }
    end
  end
end
