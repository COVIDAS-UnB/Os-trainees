class Point < ApplicationRecord
    # Relations
    has_many :checkins
    has_many :notifcations

    # Validations
    validates :initials, presence:true
    validates :name, presence:true
    validates :address, presence:true
    validates :latitude, presence:true
    validates :longitude, presence:true

end
