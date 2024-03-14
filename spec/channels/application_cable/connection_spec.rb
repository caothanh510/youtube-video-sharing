require 'rails_helper'

RSpec.describe ApplicationCable::Connection, type: :channel do
  let(:env) { { 'warden' => double(user: user) } }

  describe '#connect' do
    before do
      allow_any_instance_of(ApplicationCable::Connection).to receive(:env).and_return(env)
    end

    context "when user IS PRESENT" do
      let(:user) { double(:user, access_token: "some_access_token") }

      it 'sets current_user when a verified user is found' do
        expect { connect '/cable', headers: { 'HTTP_SEC_WEBSOCKET_PROTOCOL' => user.access_token } }.not_to raise_error
        expect(connection.current_user).to eq(user)
      end
    end
    
    context "when user IS NOT PRESENT" do
      let(:user) { nil }

      it 'rejects connection when no verified user is found' do
        expect { connect '/cable' }.to have_rejected_connection
      end
    end
  end
end