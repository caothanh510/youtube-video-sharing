class YoutubeVideoService
  attr_accessor :url

  def initialize(url: nil)
    @url = url
  end

  def perform 
    return {} unless get_youtube_info && get_youtube_info['items'].first
    data = get_youtube_info['items'].first
    {
      id: data['id'],
      title: data['snippet']['title'],
      description: data['snippet']['description']
    }
  end

  private

  def get_youtube_info
    return unless url.present?
    video_id = CGI::parse(url).flatten.second.last
    youtube_data = Net::HTTP.get(URI.parse("https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=#{video_id}&key=#{ENV['YOUTUBE_API_KEY']}"))
    youtube_data = JSON.parse(youtube_data)
  end
end