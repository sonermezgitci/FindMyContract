class ContractSerializer < ActiveModel::Serializer
  attributes :id,:start_date,:expiration_date,:amount
  belongs_to :teams
  belongs_to :players
end
