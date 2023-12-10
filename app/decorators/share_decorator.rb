class ShareDecorator < Draper::Decorator
  delegate_all

  def notification_message
    return unless additional_data.present?
    "#{additional_data['title']}<br />Shared by: #{additional_data['shared_by']}"
  end
end
