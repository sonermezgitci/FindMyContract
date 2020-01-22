Rails.application.routes.draw do
  get '/players/random/', to:'players#random'
  resources :teams
  resources :players
  resources :contracts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
