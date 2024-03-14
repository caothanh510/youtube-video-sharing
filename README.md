# Youtube Video Sharing App

## Overview

This application allows users to share YouTube videos and receive notifications about other users' shares. The home page displays a list of shared videos along with their descriptions.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Ruby
- Node.js
- Yarn
- Redis
- Docker

### Installation

1. Clone the repository: `git clone git@github.com:caothanh510/youtube-video-sharing.git`

2. Install the dependencies:

   - Ruby gems:

   ```
   bundle install
   ```

   - Node packages:

   ```
   yarn install
   ```

### Database Setup

1. Configure the database by editing `config/database.yml`.

2. Create the database: `rails db:create`

### Running the Application

- Start Frontend Side: `./bin/dev`

- Start Server Side: `rails s`

- Redis: `redis-server`

- Run spec: `bundle exec rspec`

### Docker Deployment

#### Local Setup

1.  Build the Docker image: `docker compose build`
2.  DB setup: `docker compose run --rm web bin/rails db:setup`
3.  Run app: `docker-compose up`

### Production: Dockerfile.production

## Usage

### Features

- User registration and login:
  - Login: http://127.0.0.1:3000/users/sign_in
  - Sign up: http://127.0.0.1:3000/users/sign_up
- Sharing YouTube videos: http://127.0.0.1:3000/share
- Viewing a list of shared videos: http://127.0.0.1:3000/
- Real-time notifications for new video shares: When a user shares a new video, other logged-in users will receive a real-time notification about the newly shared video.

## Support

For any issues while using the application, please create an issue on our GitHub repository: https://github.com/caothanh510/youtube-video-sharing/issues
