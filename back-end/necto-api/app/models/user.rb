class User < ApplicationRecord
    # Relations
    has_and_belongs_to_many :notifications
    belongs_to :health

end
