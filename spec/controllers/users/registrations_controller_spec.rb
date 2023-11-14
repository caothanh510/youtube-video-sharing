require 'rails_helper'

RSpec.describe Users::RegistrationsController, type: :controller do
  let(:params) do
    {
      user: {
        email: Faker::Internet.email,
        password: 'password123',
        password_confirmation: 'password123'
      }
    }
  end

  describe 'POST #create' do
    before do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      post :create, params: params
    end

    context "when success" do
      specify do
        expect(response).to be_successful
        expect(JSON.parse(response.body)).to eq({
          "status" => "success",
          "message" => "Registration successful"
        })
      end
    end

    context "when failure" do
      let(:params) do
        {
          user: {
            email: Faker::Internet.email,
            password: 'password123',
            password_confirmation: 'password1234'
          }
        }
      end

      specify do
        expect(response).to be_successful
        expect(JSON.parse(response.body)).to eq({
          "status" => "error",
          "message" => "Password confirmation doesn't match Password"
        })
      end
    end
  end
end
