class NotificationJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    user = User.find(user_id)
    latest_share = user&.shares&.order(created_at: :desc)&.first&.decorate
    NotificationService.new(created_by: user, message: latest_share.notification_message).perform
  end
end
