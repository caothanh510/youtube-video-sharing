require 'rails_helper'

describe NotificationService, type: :service do
  let!(:share) { create(:share, url: url) }
  let(:url) { 'https://www.youtube.com/watch?v=x0j_qubuOuM' }
  let(:created_by) { share.user }
  let(:message) { share.decorate.notification_message }

  subject { described_class.new(created_by: created_by, message: message) }

  describe '#perform' do
    context "when send notification" do
      it "sends notification" do
        expect(subject).to receive(:send_notification)
        subject.perform
      end

      it "creates notification" do
        expect { subject.perform }.to change { Notification.count }.by(1)
      end
    end

    context "when does not send send notification" do
      let(:created_by) { nil }
      let(:message) { nil }

      it "does not send notification" do
        expect(subject).not_to receive(:send_notification)
        subject.perform
      end

      it "does not creates notification" do
        expect { subject.perform }.to change { Notification.count }.by(0)
      end
    end
  end
end
