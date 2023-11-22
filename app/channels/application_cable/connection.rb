module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        if verified_user = User.find_by(id: user_id)
          verified_user
        else
          reject_unauthorized_connection
        end
      end

      def user_id 
        return unless user = cookies.encrypted[:_youtube_video_sharing_app_session]['warden.user.user.key']
        user[0][0]
      end
  end
end
