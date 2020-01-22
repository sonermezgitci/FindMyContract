class TeamSerializer < ActiveModel::Serializer
  attributes :id,:name,:hall,:news,:image_url
  has_many :players
  
end
