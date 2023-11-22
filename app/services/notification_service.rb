class NotificationService
  attr_accessor :created_by, :message

  def initialize(created_by: nil, message: nil)
    @created_by = created_by
    @message = message
  end

  def perform
    return unless created_by && message
    send_notification if create_notification
  end

  private 

  def create_notification
    @notification = Notification.create(created_by: created_by, message: message)
  end

  def send_notification
    ActionCable.server.broadcast('NotificationsChannel', @notification)
  end
end
