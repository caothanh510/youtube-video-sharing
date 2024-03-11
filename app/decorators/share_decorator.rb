class ShareDecorator < Draper::Decorator
  delegate_all

  def notification_message
    return unless self.url && additional_data.present?
    h.link_to("#{additional_data['title']}<br />Shared by: #{additional_data['shared_by']}".html_safe, self.url, target: '_blank')
  end
end
