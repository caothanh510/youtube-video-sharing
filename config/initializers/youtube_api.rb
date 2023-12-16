require 'google/apis/youtube_v3'

# Set your API key or configure OAuth as needed
Google::Apis::YoutubeV3::YouTubeService.new.tap do |youtube|
  youtube.key = ENV['YOUTUBE_API_KEY']
end
