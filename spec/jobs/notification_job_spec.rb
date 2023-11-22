require 'rails_helper'

RSpec.describe NotificationJob, type: :job do
  include ActiveJob::TestHelper

  subject(:job) { described_class.perform_later(user.id) }

  let(:user) { create(:user) }
  let(:notification_service) { double("NotificationService") }
  let(:latest_share) { create(:share, user: user) }

  it 'queues the job' do
    expect{ job }.to have_enqueued_job(described_class).on_queue("default")
  end

  it 'executes perform' do
    expect(NotificationService).to receive(:new).with(created_by: user, message: latest_share.decorate.notification_message) { notification_service }
    expect(notification_service).to receive(:perform)

    perform_enqueued_jobs { job }
  end

  after do
    clear_enqueued_jobs
    clear_performed_jobs
  end
end
