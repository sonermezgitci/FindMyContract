class Team < ApplicationRecord
    has_many :contracts
    has_many :players , through: :contracts 
end
