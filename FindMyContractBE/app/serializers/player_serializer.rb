class PlayerSerializer < ActiveModel::Serializer
  attributes :id ,:name,:age,:nationality,:appearance,:assist,:rebound,:points,:salary,:image_url,:youtube_url,:likes
  has_many :teams
end
