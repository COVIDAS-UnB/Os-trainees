class Point < ApplicationRecord
    # Relations
    has_many :checkins
    has_many :notifcations

    # Validations
    validates :initials, confirmation:true
    validates :name, confirmation:true
    validates :address, confirmation:true
    validates :latitude, confirmation:true
    validates :longitude, confirmation:true

end
