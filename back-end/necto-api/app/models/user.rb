class User < ApplicationRecord
    # Relations
    has_many :checkins
    has_and_belongs_to_many :notifications
    belongs_to :health

    # Validations
    validates :name, confirmation:true
    validates :password, confirmation:true
    validates :registration, confirmation:true
    validates :program, confirmation:true

end
