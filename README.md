# Youtube Video Sharing App

1. Introduction: The main features of this application is:

   - User can shares youtube video features and notification for other users
   - Home page: Listed the youtube video users shared to show detail the description of video

2. Installation & Configuration:

   - Cloning the repository: `git clone git@github.com:caothanh510/youtube-video-sharing.git`

   - Installing dependencies:
   - Gem packge: `bundle install`
   - Node packge: `npm install`

3. Database Setup:

   - Database Configuration: `config/database.yml`

   - Database Creation: `rails db:create`

4. Running the Application: How to start the development server, access the application in a web browser, and run the test suite.

- Start Frontend Side: ./bin/dev

- Start Server Side: rails s

- Redis: redis-server

6. (BE/FS) Docker Deployment: Instructions for deploying the application using Docker, including building the Docker image and running containers (optional for Backend developers)
   https://blog.saeloun.com/2023/11/29/rails-7-1-introduces-default-docker-files/

7. Usage: Features Of Application

   - User registration and login:

     - Login: http://127.0.0.1:3000/users/sign_in
     - SignUp: http://127.0.0.1:3000/users/sign_up

   - Sharing YouTube videos: http://127.0.0.1:3000/share

   - Viewing a list of shared videos: http://127.0.0.1:3000/

   - Real-time notifications for new video shares: When a user shares a new video, other logged-in users should receive a real-time notification about the newly shared video.

8. Troubleshooting: Please create issue while using application here: https://github.com/caothanh510/youtube-video-sharing/issues
