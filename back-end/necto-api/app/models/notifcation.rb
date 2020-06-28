class Notifcation < ApplicationRecord
    # Validations
    has_and_belongs_to_many :users
    
end
