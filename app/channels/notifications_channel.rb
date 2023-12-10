class NotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "NotificationsChannel"
  end

  def unsubscribed
  end
end
