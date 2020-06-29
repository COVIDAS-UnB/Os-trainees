class Checkin < ApplicationRecord
    after_create :set_hour 

    # Relations
    belongs_to :user
    belongs_to :point

    # Validations
    validates :date_created, presence:true
    validates :hour, presence:true

    private

    def set_hour
        self.hour = self.created_at.strftime("%I.%M").to_f
        self.save
    end

end
