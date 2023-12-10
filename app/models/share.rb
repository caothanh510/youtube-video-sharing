class Share < ApplicationRecord
  belongs_to :user
  
  validates :url, presence: true

  validate :youtube_url_format

  private

  def youtube_url_format
    begin
      uri = URI.parse(url)

      unless uri.host =~ /(?:www\.)?youtube\.com/ && uri.query =~ /(?:^|\&)v=[a-zA-Z0-9_-]{11}(?:$|\&)/
        errors.add(:url, 'must be a valid YouTube video URL')
      end
    rescue URI::InvalidURIError
      errors.add(:url, 'is not a valid URL')
    end
  end
end
