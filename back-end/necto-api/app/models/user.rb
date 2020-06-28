class User < ApplicationRecord
    # Validations
    has_and_belongs_to_many :notifications

end
