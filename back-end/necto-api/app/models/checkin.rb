class Checkin < ApplicationRecord
    # Relations
    belongs_to :user
    belongs_to :point

    # Validations
    validates :date, presence:true
    validates :hour, presence:true

end
