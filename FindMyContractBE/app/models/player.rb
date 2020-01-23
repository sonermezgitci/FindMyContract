class Player < ApplicationRecord
    has_many :contracts
    has_many :teams , through: :contracts 
    validates :name, uniqueness: true

end
