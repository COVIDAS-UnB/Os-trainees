class User < ApplicationRecord

    after_validation :send_notification

    # Relations
    has_many :checkins
    has_and_belongs_to_many :notifications
    belongs_to :health

    # Validations
    validates :name, presence:true
    validates :password, presence:true
    validates :registration, presence:true
    validates :program, presence:true

    private

    def send_notification
        if self.health
            if self.health.status == "Doente - Covidado"
                puts "Puts mano, tá bem n"
                loop_to_catch_points
            end     
        end
    end

    def loop_to_catch_points
        check = Array.new
        self.checkins.each do |checkin|
            puts checkin
            check.append({date: checkin.date, hour: checkin.hour})
        end
        puts check
    end

end
