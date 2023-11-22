class Notification < ApplicationRecord
  belongs_to :created_by, class_name: 'User'

  validates :created_by_id, presence: true
  validates :message, presence: true
end
