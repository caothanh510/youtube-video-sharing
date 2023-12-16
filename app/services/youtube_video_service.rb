class YoutubeVideoService
  attr_accessor :url

  def initialize(url: nil)
    @url = url
  end

  def perform 
    begin
      data = get_youtube_info 
      return {} unless data.present?
      {
        id: data.id,
        title: data.snippet.title,
        description: data.snippet.description,
      }
    rescue StandardError => e
      Rails.logger.error("Youtube video service: #{e.message}")
      Rails.logger.error(e.backtrace.join("\n"))
      false
    end
  end

  private

  def get_youtube_info
    return unless url.present?
    video_id = CGI::parse(url).flatten.second.last
    response = youtube.list_videos('snippet', id: video_id)
    response.items.first
  end

  def youtube
    @youtube ||= Google::Apis::YoutubeV3::YouTubeService.new
    @youtube.key = ENV['YOUTUBE_API_KEY']
    @youtube
  end
end