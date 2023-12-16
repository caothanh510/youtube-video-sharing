require 'rails_helper'

RSpec.describe SharesController, type: :controller do
  describe 'GET #index' do
    it 'returns a JSON response' do
      get :index, format: :json
      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq('application/json; charset=utf-8')
    end
  end

  describe 'POST #create' do
    let(:current_user) { create(:user) }
    let(:params) do
      {
        share: {
          url: 'https://www.youtube.com/watch?v=9bZkp7q19f0'
        }
      }
    end

    before do
      allow(controller).to receive(:current_user).and_return(current_user)
    end

    context 'with valid params' do
      it 'creates a new Share' do
        expect do
          post :create, params: params, format: :json
        end.to change(Share, :count).by(1)
      end

      it 'renders a JSON response with the new share' do
        post :create, params: params, format: :json
        data = JSON.parse(response.body)
        created_share = Share.last.to_json

        expect(response).to have_http_status(:success)
        expect(response.content_type).to eq('application/json; charset=utf-8')
        expect(data['status']).to eq('success')
        expect(data['message']).to eq('Shared successful')
        expect(data['data']).to eq(JSON.parse(created_share))
      end
    end

    context 'with invalid params' do
      let(:params) do
        {
          share: {
            url: 'https://google.com/'
          }
        }
      end

      it 'renders a JSON response with errors for the new share' do
        post :create, params: params, format: :json

        data = JSON.parse(response.body)
        expect(response).to have_http_status(:success)
        expect(response.content_type).to eq('application/json; charset=utf-8')
        expect(data['status']).to eq('error')
        expect(data['message']).to eq('Url must be a valid YouTube video URL')
      end
    end
  end
end
