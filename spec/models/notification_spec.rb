require 'rails_helper'

RSpec.describe Notification, type: :model do
  describe "associations" do
    it { is_expected.to belong_to(:created_by).class_name('User') }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:created_by_id) }
    it { is_expected.to validate_presence_of(:message) }
  end
end
