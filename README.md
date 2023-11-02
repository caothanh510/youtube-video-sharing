# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

# React On Rails

We did not find a spec/rails_helper.rb or spec/spec_helper.rb to add
the React on Rails Test helper, which ensures that if we are running
js tests, then we are using latest webpack assets. You can later add
this to your rspec config:

# This will use the defaults of :js and :server_rendering meta tags

ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)

What to do next:

- See the documentation on https://github.com/shakacode/shakapacker#webpack-configuration
  for how to customize the default webpack configuration.

- Include your webpack assets to your application layout.

  <%= javascript_pack_tag 'hello-world-bundle' %>

- To start Rails server run:

  ./bin/dev # Running with HMR

  or

  ./bin/dev-static # Running with statically created bundles, without HMR

- To server render, change this line app/views/hello_world/index.html.erb to
  `prerender: true` to see server rendering (right click on page and select "view source").

  <%= react_component("HelloWorldApp", props: @hello_world_props, prerender: true) %>

Alternative steps to run the app:

- Run `rails s` to start the Rails server.

- Run bin/shakapacker-dev-server to start the Webpack dev server for compilation of Webpack
  assets as soon as you save. This default setup with the dev server does not work
  for server rendering

- Visit http://localhost:3000/hello_world and see your React On Rails app running!

- To turn on HMR, edit config/shakapacker.yml and set HMR to true. Restart the rails server
  and bin/shakapacker-dev-server. Or use Procfile.dev.
