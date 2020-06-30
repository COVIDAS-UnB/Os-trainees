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
            check.append({point_id:checkin.point_id, date:checkin.date_created.strftime("%d/%m/%Y"), hour: checkin.hour})
        end
        puts json:{check:check, message:"Oie"}
        check
    end

    def point_checkins(points)
        @not = Notifcation.new(notification_type: "Um caso de covid foi confirmado", show: true)
        if @not.save
            puts @not.attributes
        end

        all_checkins = Array.new
        
        points.each do |point|
            # all_checkins.append(Point.find(point[:point_id]).checkins.all.pluck(:user_id))
            teste = User.find(Point.find(point[:point_id]).checkins.all.pluck(:user_id))
            # NotificationsUser.create(user_id: teste, notification_id: @not.id)
        end
        
        puts json:{all_checkins: all_checkins, message:"Oie 2"}
        # puts json:({checkin: Checkin.where("date_created = '2020-06-29 14:58:26'"), texto: "alou"})
    end

end
