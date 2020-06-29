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
                user_points = loop_to_catch_points
                point_checkins(user_points)
            end     
        end
    end

    def loop_to_catch_points
        check = Array.new
        self.checkins.each do |checkin|
            check.append({point_id:checkin.point_id, date:checkin.created_at.strftime("%d/%m/%Y"), hour: checkin.created_at.strftime("%I.%M")})
        end
        puts check
        check
    end

    def point_checkins(points)
        @not = Notifcation.create(notification_type: "Um caso de covid foi confirmado", show: true)
        all_checkins = Array.new
        points.each do |point|
            all_checkins.append(Point.find(point[:point_id]).checkins.all)
        end
        puts json:({checkin: Checkin.where("created_at = '2020-06-29 14:58:26'"), texto: "alou"})
    end

end
