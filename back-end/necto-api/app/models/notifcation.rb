class Notifcation < ApplicationRecord
    # Relations
    has_and_belongs_to_many :users

end
