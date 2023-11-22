require 'rails_helper'

RSpec.describe NotificationsChannel, type: :channel do
  let(:user) { create(:user) } 

  before do
    subscribe
  end

  it 'subscribes to a stream when the user is authenticated' do
    expect(subscription).to be_confirmed
    expect(subscription).to have_stream_from('NotificationsChannel')
  end
end
