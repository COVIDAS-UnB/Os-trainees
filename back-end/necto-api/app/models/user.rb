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
                # loop_to_catch_user_notifications(user_points)
            end     
        end
    end

    def loop_to_catch_points
        check = Array.new
        self.checkins.each do |checkin|
            check.append({local_id: checkin.point_id})
        end
        check
    end

    # A gente pega todos os locais que o infectado frequentou
    # A gente vai criar a notificação e percorrer checkins dos locais que o infectado frequentou
    # A gente vai vincular a notificação ao uusuário que teve o contato

    def point_checkins(points)
        not = Notification.create(notification_type: "Um caso de covid foi confirmado")
        points.each do |point|
            Point.find(point.local_id)
        end
    end

    # def loop_to_catch_user_notifications(user_points)
    #     @users = User.all
    #     notification_user = Array.new
    #     @users.each do |user|
    #         if user_points.local_id == user.checkin.point_id
    #             notification_user.append()
    #         end
    #     end
    #     puts user_points
    # end

end
