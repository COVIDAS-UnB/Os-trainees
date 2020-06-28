class Health < ApplicationRecord

    # Relations
    has_many :users

    # Validations
    validates :status, presence: true

end
