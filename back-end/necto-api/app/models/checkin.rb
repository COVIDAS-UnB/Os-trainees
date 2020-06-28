class Checkin < ApplicationRecord
    # Relations
    belongs_to :users
    belongs_to :points

    # Validations
    validates :date, presence:true
    validates :hour, presence:true

end
