require 'rails_helper'

RSpec.describe ShareDecorator do
  describe "#notification_message" do
    let(:additional_data) { nil }
    let(:share) { Share.new(url: 'http://example.com', additional_data: additional_data) }
  
    subject { share.decorate.notification_message }
  
    context "when additional_data is blank" do
      it { is_expected.to be_nil }
    end
  
    context "when additional_data is not blank" do
      let(:additional_data) { { 'title' => 'Test Title', 'shared_by' => 'Test User' } }
  
      it { is_expected.to eq('<a target="_blank" href="http://example.com">Test Title<br />Shared by: Test User</a>') }
    end
  end
end
