Rails.application.routes.draw do
  mount ActionCable.server, at: '/cable'

  post '/login', to: 'authentication#login'
  get '/stories/:id/test', to: 'stories#testBroadcast'
  post '/stories/:id/append', to: 'stories#append'
  post '/view-story/:id', to: 'stories#view'

  resources :submissions
  # resources :votes
  # resources :stories
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
