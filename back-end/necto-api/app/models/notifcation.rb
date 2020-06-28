class Notifcation < ApplicationRecord
    # Relations
    has_and_belongs_to_many :users
    belongs_to :point

    # Validations
    validates :notification_type, presence:true

end
