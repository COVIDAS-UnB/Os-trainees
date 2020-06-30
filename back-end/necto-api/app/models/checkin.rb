class Checkin < ApplicationRecord
    after_create :set_hour 

    # Relations
    belongs_to :user
    belongs_to :point

    private

    def set_hour
        self.date_created = self.created_at.strftime("%d/%m/%Y")
        self.hour = self.created_at.strftime("%H.%M").to_f
        self.save
    end

end
