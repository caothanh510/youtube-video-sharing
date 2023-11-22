require 'rails_helper'

RSpec.describe ShareDecorator do
  describe "#notification_message" do
    let(:share) { build(:share, additional_data: additional_data) }
    let(:additional_data) { nil }

    subject { share.decorate.notification_message }

    context "when additional_data is Blank" do
      it { is_expected.to be_nil }
    end

    context "when additional_data is not Blank" do
      let(:additional_data) { { "title" => "Test Title", "shared_by" => "Test User" } }

      it { is_expected.to eq("Test Title<br />Shared by: Test User") }
    end
  end
end
