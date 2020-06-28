class Checkin < ApplicationRecord
    # Relations
    belongs_to :users
    belongs_to :points

    # Validations
    validates :date, confirmation:true
    validates :hour, confirmation:true

end
