FactoryBot.define do
  factory :share do
    url { "https://www.youtube.com/watch?v=jh4C7w-dvho" }
    additional_data { { "title" => "Test Title", "shared_by" => "Test User" } }
    association :user
  end
end
