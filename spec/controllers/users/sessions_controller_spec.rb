require 'rails_helper'

RSpec.describe Users::SessionsController, type: :controller do
  let!(:user) { create(:user, email: "thanh.dev@gmail.com", password: "password123") }
  let(:params) do
    {
      user: {
        email: "thanh.dev@gmail.com",
        password: 'password123'
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
          "message" => "Login successful",
          "data" => "thanh.dev@gmail.com"
        })
      end
    end

    context "when failure" do
      let(:params) do
        {
          user: {
            email: Faker::Internet.email,
            password: 'password123',
          }
        }
      end

      specify do
        expect(response).to be_successful
        expect(JSON.parse(response.body)).to eq({
          "status" => "error",
          "message" => "Invalid email or password"
        })
      end
    end
  end

  describe 'DELETE #destroy' do
    before do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      sign_in user
      delete :destroy
    end

    specify do
      expect(response).to be_successful
      expect(JSON.parse(response.body)).to eq({
        "status" => "success",
        "message" => "Logout successful"
      })
    end
  end
end
